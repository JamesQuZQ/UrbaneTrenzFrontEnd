import React, { useState, useEffect } from 'react';

import { AppBar, Grid } from "@mui/material";
import Header from '../../components/Header'
import CartCard from "./components/CartCard/CartCard";
import SummaryCard from "./components/SummaryCard";


export default function CartPage() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(){
    fetch(`http://localhost:5000/api/cart`,{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((result) => {
      setData(result);
    });
  }

  function removeAll(){
    fetch(`http://localhost:5000/api/cartRemoveAll`,{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((result) => {
      fetchData()
    });
  }

  return (
    <div className="CartPage">
      <AppBar position="sticky" elevation={0}>
        <Header page="Shopping Cart"/>
      </AppBar>
      <Grid container columns={10} spacing={1} >
        <Grid item md={7} xs={7}>
          <CartCard data={data} fetchData={fetchData} removeAll={removeAll}/>
        </Grid>
        <Grid item md={3} xs={3}
          sx={{
            position: 'fixed',
            top: 56,
            right:0,
            
          }}
        >
          <SummaryCard data={data}/>
        </Grid>
      </Grid>
      
    </div>
  );
}
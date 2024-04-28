import React, { useState, useEffect } from 'react';
import { Button, AppBar, Grid } from "@mui/material";

import AddressCard from './components/AddressCard/AddressCard';
import CartCard from './components/CartCard/CartCard';
import Header from '../../components/Header';
import SummaryCard from './components/SummaryCard';
import PaymentCard from './components/PaymentCard/PaymentCard';

export default function CheckoutPage() {

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

  return (
    <div className="CheckoutPage">
      <AppBar position="sticky" elevation={0}>
        <Header page="Checkout"/>
      </AppBar>
      <Grid container columns={10} spacing={1} >
        <Grid item md={7} xs={7}>
          <AddressCard/>
          <PaymentCard/>
          <CartCard data={data}/>
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
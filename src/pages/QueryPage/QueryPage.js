import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";

import GridItems from '../../components/GridItems/GridItems';
import AppBar from '@mui/material/AppBar';
import Header from '../../components/Header';
import Category from '../../components/Category';
import { Typography, Box } from '@mui/material';

var itemsCount = 0;

export default function QueryPage() {

  const { query } = useParams();

  const [data, setData] = useState(null);

  let location = useLocation();
  
  useEffect(() => {
    setData(null)
    fetchData();
  }, [location]);

  function fetchData(){
    itemsCount = itemsCount + 20;
    fetch(`http://localhost:5000/api/query?queryValue=${query}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }

  const noSearchResult = (data!=null && data.length==0) ?
  (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height:200
      }}
    >
      <Typography variant="h5">
        There's currently no product related to "{query}".
      </Typography>
    </Box>

  ) : <Box></Box>

  const hasMoreData =(data!=null)&&(itemsCount <= data.length)

  return (
    <div className="HomePage">
      <AppBar position="sticky" elevation={0}>
        <Header page="home"/>
        <Category />
      </AppBar>
      {noSearchResult}
      <GridItems 
        columnCount={5} 
        data={data} 
        fetchData={fetchData} 
        hasMoreData={hasMoreData}
      />
    </div>
  );
}
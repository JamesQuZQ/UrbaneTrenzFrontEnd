import React, { useState, useEffect } from 'react';

import GridItems from '../../components/GridItems/GridItems';
import AppBar from '@mui/material/AppBar';
import Header from '../../components/Header';
import Category from '../../components/Category';

var itemsCount = 0;

export default function HomePage() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(){
    itemsCount = itemsCount + 20;
    fetch(`http://localhost:5000/api/browse?count=${itemsCount}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }

  function hasMoreData() {
    return itemsCount > data.length
  }

  return (
    <div className="HomePage">
      <AppBar position="sticky" elevation={0}>
        <Header page="home"/>
        <Category />
      </AppBar>
      <GridItems 
        columnCount={5} 
        data={data} 
        fetchData={fetchData} 
        hasMoreData={hasMoreData}
      />
    </div>
  );
}
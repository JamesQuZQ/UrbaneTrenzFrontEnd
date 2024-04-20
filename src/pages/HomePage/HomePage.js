import React, { useState, useEffect } from 'react';
import Items from '../../components/GridItems/GridItems';
import AppBar from '@mui/material/AppBar';
import Header from '../../components/Header';
import Category from '../../components/Category';

export default function HomePage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => {
        console.log()
        setData(data);
      });
  }, []);

  return (
    <div className="HomePage">
      <AppBar position="sticky" elevation={0}>
        <Header page="home"/>
        <Category />
      </AppBar>
      <p>{data.firstname}</p>
      <Items/>
    </div>
  );
}
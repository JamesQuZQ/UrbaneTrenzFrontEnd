import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";

import {AppBar, Box, Grid, Typography} from '@mui/material';
import GridItems from '../../components/GridItems/GridItems';
import Header from '../../components/Header';
import Category from '../../components/Category';
import SubCategoryPage from './components/SubcategoryPage';

var itemsCount = 0;

export default function GenderCategoryPage(props) {

  const [data, setData] = useState([]);
  const [currentSubcategory, setCurrentSubcategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [display, setDisplay] = useState(false);



  // const {type,category,subcategory} = props.match.params
  const { type,category,subcategory } = useParams();
  let location = useLocation()

  useEffect(() => {
    setData([])
    setSubcategories([])
    setCurrentSubcategory("")
    setDisplay("false")
    fetch(`http://localhost:5000/api/subcategory?type=${type}&value=${category}`)
    .then((response) => response.json())
    .then(async (result) => {
      setSubcategories(result);
      if (await result.some(e => e.SubCategory === subcategory)) {
        setCurrentSubcategory(subcategory)
      } else {
        setCurrentSubcategory(await result[0].SubCategory)
      }
    })
  }, [location]);

  useEffect(() => {
    if (subcategory !== ""){
      setDisplay(true)
      fetchDataBySubcategory()
    }
  }, [subcategories]);

  function fetchDataBySubcategory(){
    itemsCount = itemsCount + 20;
    fetch(`http://localhost:5000/api/browse?count=${itemsCount}&type=${type}&value=${category}&subcategory=${currentSubcategory}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }

  const hasMoreData = (itemsCount <= data.length)||data.length==0

  return (
    <div className="HomePage">
      <AppBar position="sticky" elevation={0}>
        <Header page="home"/>
        <Category />
      </AppBar>

      <Grid 
        container 
        columns={10} 
        spacing={1} 
        justifyContent="flex-end"
        >
        <Grid item md={2} xs={2}
          sx={{
            position: 'fixed',
            top: 80,
            left:10,
          }}
        >
          {display? <SubCategoryPage 
            type={type}
            category={category}
            subcategories={subcategories}
            currentSubcategory={currentSubcategory}
          />:<Box></Box>}
          
        </Grid>
        <Grid item md={8} xs={8} sx={{mr:2}}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#000000",
              mt: 2,
              ml: 1,
              mr: 1,
              borderRadius: 1,
              height: 45
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontFamily: "AnotherDanger",
                color: "#FFFFFF"
              }}
            >
              {currentSubcategory}&nbsp;&nbsp;for&nbsp;&nbsp;{type==="category" ? "all" : category}
            </Typography>
          </Box>
          <GridItems 
            columnCount={4} 
            data={data} 
            fetchData={fetchDataBySubcategory} 
            hasMoreData={hasMoreData}
          />
        </Grid>
      </Grid>

    </div>
  );
}
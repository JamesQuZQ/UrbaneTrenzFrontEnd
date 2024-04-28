import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {Box, Divider, Grid, Typography} from '@mui/material';
import ShopItem from './ShopItem/ShopItem';


export default function GridItems(props) {

  var {data, fetchData, hasMoreData, columnCount} = props;

  const listItems = data?data.map(product => 
    <Grid key={product["ProductID"]} item sm={60/(columnCount-2)} md={60/(columnCount-1)} lg={60/columnCount}>
      <ShopItem key={product["ProductID"]} item={product} />
    </Grid>
  ):<Box></Box>;

  return (
    <InfiniteScroll
      dataLength={data?data.length:0} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMoreData}
      loader={
        <Box
          display = "flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography 
            sx={{fontWeight: "bold"}}
            variant="h6"
          >
            Loading...
          </Typography>
        </Box>
      }
      endMessage={
        <Box
          display = "flex"
          justifyContent="center"
          sx={{
            width:"100%"
          }}
        >
          <Divider
            sx={{
              width: "50%",
              m: 2
            }}
          >
            You've scrolled to the bottom!
          </Divider>
        </Box>

      }
    >
      <Grid
        container
        spacing={0}
        justify="center"
        columns={60}
      >
        {
          listItems
        }
      </Grid>
    </InfiniteScroll>
  )
}

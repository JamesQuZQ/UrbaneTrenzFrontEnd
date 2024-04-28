import React, { useState, useEffect } from 'react';

import { Card, Divider, Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export default function SummaryCard(props) {

  var {data} = props;

  function sum( ) {
    var sum = 0;
    for( var product in data ) {
      sum += data[product].count * data[product].details.Price
    }
    return sum;
  }

  return (
    <div className="CartCard">
      <Card sx={{
        minWidth: 320,
        mt: 3,
        mr: 3,
        p: 1
        }}>

        <Box 
          display="flex" 
          justifyContent="center"
          sx={{m:1, mb:2}}
        >
          <Button 
            variant="contained"
            fullWidth={true}
            component={Link}
            disabled={data===undefined||Object.keys(data).length===0}
            to="/checkout"
            sx={{borderRadius: 25}}
          >
            Proceed to Checkout
          </Button>
        </Box>

        <Divider/>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Box display="flex">
            <Typography
              sx={{ fontWeight: 'bold' }}
              variant="body1"
            >
              Subtotal
            </Typography>
            <Typography 
              variant="body1"
              sx={{pl: 0.5}}
            >
               ({data?data.length:0} items)
            </Typography>
          </Box>

          <Typography
            variant="body1"
          >
            ${data?sum():0}
          </Typography>
        </Box>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body2"
          >
            Tax
          </Typography>

          <Typography
            variant="caption"
          >
            Calculated at Checkout
          </Typography>
        </Box>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 'bold' }}
          >
            Shipping
          </Typography>

          <Typography
            variant="caption"
          >
            Calculated at Checkout
          </Typography>
        </Box>

        {/* <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
          >
            Coupon
          </Typography>

          <Typography
            variant="caption"
          >
            10% off first purchase
          </Typography>
        </Box> */}

        <Divider/>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
          >
            Estimated Total:
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            color="green"
          >
            ${data?sum():0}
          </Typography>
        </Box>

      </Card>
    </div>
  );
}
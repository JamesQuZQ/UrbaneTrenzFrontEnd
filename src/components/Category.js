import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import {AppBar,Box,Button,Toolbar,MenuItem,Typography}
 from '@mui/material';
import { Link } from "react-router-dom";


const theme = createTheme({
  typography: {
    fontSize: 10
  }
});

export default function Category() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar 
        position="relative" 
        elevation={0}
        sx={{
          backgroundColor:'#0d41d1'
        }}
      >
        <Toolbar variant="dense" sx={{margin:-1}}>
          <MenuItem
            component={Link}
            to="/browse/gender/men/home"
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                ml: 3,
                mr: 3
              }}
            >
              Men
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/browse/gender/women/home"
          >
          <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                ml: 3,
                mr: 3
              }}
            >
              Women
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/browse/gender/boys/home"
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                ml: 3,
                mr: 3
              }}
            >
              Boys
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/browse/gender/girls/home"
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                ml: 3,
                mr: 3
              }}
            >
              Girls
            </Typography>
          </MenuItem>

          <MenuItem
            component={Link}
            to="/browse/category/apparel/home"
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                ml: 3,
                mr: 3
              }}
            >
              Apparel
            </Typography>
          </MenuItem>
          <MenuItem
            component={Link}
            to="/browse/category/footwear/home"
          >
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                ml: 3,
                mr: 3
              }}
            >
              Footwear
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

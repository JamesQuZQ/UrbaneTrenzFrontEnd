import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


const theme = createTheme({
  typography: {
    fontSize: 10
  }
});

export default function Category() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative" color="secondary">
        <Toolbar variant="dense" sx={{margin:-1}}>
          <MenuItem>
            <Typography>
              Meat
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Vegetable
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Drinks
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Frozen
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

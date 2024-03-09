import React, { Component } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import AnchorIcon from '@mui/icons-material/Anchor';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header(){

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            startIcon={<AnchorIcon/>}
            color="inherit"
          >
            Shopping Website
          </Button>
          <Button
            color="inherit"
          >
            Home
          </Button>
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Products…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button
            color="inherit"
          >
            Orders
          </Button>
          <Button
            color="inherit"
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


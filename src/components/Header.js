import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link } from "react-router-dom";
import {AppBar,Grid,Box,Button,InputBase,Toolbar,Typography}
 from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

function renderSwitch(page, searchParam, setSearchParam) {

  const recordSearchValue = (event) => {
    setSearchParam(event.target.value)
  };

  switch(page) {
    case 'home':
      return (
        <Search alignItem="space-between" sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase 
            sx={{fontStyle:'italic', width:"85%" }}
            placeholder="Search Products…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={recordSearchValue}
          />
          <Button
            endIcon={<SubdirectoryArrowRightIcon sx={{transform:"scaleX(-1)",ml:-0.5, mb:0.5}} />}
            sx={{mb:0.1}}
            component={Link}
            to={`/query/${searchParam}`}
            color="inherit"
          >
            Search
          </Button>
        </Search>
      );
    default:
      return (
        <Box sx={{ flexGrow: 1 }}>
          <Typography 
            variant="h6"
            textAlign="center"
          >
            {page}
          </Typography>
        </Box>
      );
  }
}

export default function Header(props){

  const [searchParam, setSearchParam] = useState([]);

  return (
    <AppBar 
      position="static" 
      component="nav" 
      elevation={0}
    >
      <Toolbar>
        <Button 
          component={Link}
          to="/"
          color="inherit"
          sx={{
            fontSize: 30,
            fontFamily: "AnotherDanger"
          }}
        >
          Urbane Trenz
        </Button>
        {
        renderSwitch(props.page, searchParam, setSearchParam)
        }
        <Button
          component={Link}
          to="/cart"
          color="inherit"
          endIcon={<ShoppingCartIcon/>}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  )
}


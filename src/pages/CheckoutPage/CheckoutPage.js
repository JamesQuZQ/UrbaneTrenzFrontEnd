import * as React from 'react';

import { Button, AppBar } from "@mui/material";
import Header from '../../components/Header';
import AddressForm from "./components/AddressForm";

export default function CheckoutPage() {

  const [openForm, setOpenForm] = React.useState(false);

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };
  
  return (
    <div className="CheckoutPage">
      <AppBar position="sticky" elevation={0}>
        <Header page="Checkout"/>
      </AppBar>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <AddressForm open={openForm} handleClose={handleClose}/>
      
    </div>
  );
}
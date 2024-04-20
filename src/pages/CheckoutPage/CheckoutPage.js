import * as React from 'react';

import { Button, AppBar, Grid } from "@mui/material";

import AddressCard from './components/AddressCard/AddressCard';
import CartCard from './components/CartCard/CartCard';
import Header from '../../components/Header';
import SummaryCard from './components/SummaryCard';
import PaymentCard from './components/PaymentCard/PaymentCard';

export default function CheckoutPage() {

  return (
    <div className="CheckoutPage">
      <AppBar position="sticky" elevation={0}>
        <Header page="Checkout"/>
      </AppBar>
      <Grid container columns={10} spacing={1} >
        <Grid item md={7} xs={7}>
          <AddressCard/>
          <PaymentCard/>
          <CartCard/>
        </Grid>
        <Grid item md={3} xs={3}
          sx={{
            position: 'fixed',
            top: 56,
            right:0,
          }}
        >
          <SummaryCard/>
        </Grid>
      </Grid>
    </div>
  );
}
import * as React from 'react';

import { Typography, Card, Grid, Button, Box, Link} from "@mui/material";
import AddressForm from "./components/AddressForm";
import AddressSubCard from './components/AddressSubCard';
import ShippingSelector from './components/ShippingSelector';

export default function AddressCard() {

  const [openForm, setOpenForm] = React.useState(false);

  const testData = {
    firstname: 'Beth',
    lastname: 'Chen',
    phone: '0412345678',
    address: 'Somewhere St',
    city: 'Sydney',
    state: 'NSW',
    postcode: '2042',
    email: '123@abc.com'
  }

  const [addressData, setAddressData] = React.useState(testData);

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleDateChange = (data) => {
    setAddressData(data);
  }
  
  // TODO: Confirm with user if they want to close form (see temu)

  return (
    <div className="AddressCard">
      <Card sx={{
        ml: 3,
        mt: 3,
        p: 1
      }}>
        <Grid container spacing={3} columns={10}>
          <Grid item md={5}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{m:1}}
            >
              <Typography
                variant="body1"
                sx={{fontWeight: "bold"}}
              >
                Delivery Address
              </Typography>
              <Box display="flex">
                <Link
                  component="button"
                  color="inherit"
                  variant="body2"
                  underline="hover"
                  sx={{fontSize:12}}
                >
                  Change Address
                </Link>
                <Typography sx={{fontSize:12,ml:0.5, mt:0.5}}>{'>'}</Typography>
              </Box>
            </Box>
            <AddressSubCard 
              addressData={addressData} 
              handleClickOpen={handleClickOpen}
            />
          </Grid>
          <Grid item md={4}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              sx={{m:1}}
            >
              <Typography
                variant="body1"
                sx={{fontWeight: "bold"}}
              >
                Shipping Method
              </Typography>
              <ShippingSelector/>
            </Box>
          </Grid>
        </Grid>
        <AddressForm 
          open={openForm}
          handleClose={handleClose}
          data={addressData}
          setData={handleDateChange}
        />
      </Card>
    </div>
  );
}
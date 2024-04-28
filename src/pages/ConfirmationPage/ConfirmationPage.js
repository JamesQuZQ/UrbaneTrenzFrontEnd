import { AppBar, Box, Typography } from '@mui/material';
import Header from '../../components/Header';
import Category from '../../components/Category';

export default function ConfirmationPage(props) {

  return (
    <div className="HomePage">
      <AppBar position="sticky" elevation={0}>
        <Header page="Order Confirmation"/>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight:'80vh'}}
      >
        <Typography variant="h4">
          Your order has been successfully placed!
        </Typography>
        <Typography variant="h6">
          Please check your order details in the order confimation email
          sent to your email address.
        </Typography>
      </Box>
    </div>
  );
}
import { AppBar, Grid } from "@mui/material";
import Header from '../../components/Header'
import CartCard from "./components/CartCard";
import SummaryCard from "./components/SummaryCard";


export default function CartPage() {
  return (
    <div className="CartPage">
      <AppBar position="sticky" elevation={0}>
        <Header page="Shopping Cart"/>
      </AppBar>
      <Grid container columns={10} spacing={1} >
        <Grid item md={7} xs={7}>
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
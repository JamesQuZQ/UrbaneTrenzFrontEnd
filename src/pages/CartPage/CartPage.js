import { Card, Grid } from "@mui/material";
import CartCard from "./components/CartCard";
import SummaryCard from "./components/SummaryCard";


export default function CartPage() {
  return (
    <div className="CartPage">
      <Grid container columns={10} spacing={1} >
        <Grid item md={7} xs={7}>
          <CartCard/>
        </Grid>
        <Grid item md={3} xs={3}
          sx={{
            position: 'fixed',
            top: 90,
            right:0,
            
          }}
        >
          <SummaryCard/>
        </Grid>
      </Grid>
      
    </div>
  );
}
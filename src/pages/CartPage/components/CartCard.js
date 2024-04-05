import { Typography, Card, Grid, Link} from "@mui/material";
import CartItem from './CartItem'

export default function CartCard() {
  return (
    <div className="CartCard">
      <Card sx={{
        ml: 3,
        mt: 3,
        p: 1
        }}>
        <Typography
          variant="h5"
        >
          Shopping Cart
        </Typography>
        <CartItem />
        <CartItem />
        <CartItem />
        <Grid 
          container 
          columns={5} 
          justifyContent="flex-end"
          textAlign={"right"}
          sx={{pr:5}}
        >
          <Grid item xs={1} md={1}>
            <Link variant="body1">
              Remove all items
            </Link>
          </Grid>
          <Grid item xs={1} md={1}>
            <Typography
              variant="body1"
            >
              Subtotal: xxx
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
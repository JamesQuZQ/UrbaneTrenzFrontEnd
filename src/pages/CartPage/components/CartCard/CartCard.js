import { Typography, Card, Button, Grid, Link, Box} from "@mui/material";
import CartItem from './components/CartItem'

export default function CartCard(props) {

  var {data, fetchData, removeAll} = props;

  const listItems = data&&data.length!=0 ? 
  Object.keys(data).map(product => 
    <CartItem 
    fetchData={fetchData}
    key={data[product].details.ProductID} 
    item={data[product].details}
    count={data[product].count} />
  ):<Box>No Items </Box>;

  function sum( ) {
    var sum = 0;
    for( var product in data ) {
      sum += data[product].count * data[product].details.Price
    }
    return sum;
  }

  return (
    <div className="CartCard">
      <Card sx={{
        ml: 3,
        mt: 3,
        p: 1
        }}>
        <Typography
          variant="h5"
          sx={{m:1}}
        >
          Shopping Cart
        </Typography>

        {
          listItems
        }
        <Grid 
          container 
          columns={5} 
          justifyContent="flex-end"
          textAlign={"right"}
          sx={{pr:5}}
        >
          <Grid item xs={1} md={1}>
            <Button 
            sx={{
              textTransform:"none",
              textDecoration:"underline"
            }}
            component={Link}
            variant="body1" 
            onClick={removeAll}>
              Remove all items
            </Button>
          </Grid>
          <Grid item xs={1} md={1}>
            <Typography
              variant="body1"
              sx={{mt:0.6}}
            >
              Subtotal: ${data?sum():0}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
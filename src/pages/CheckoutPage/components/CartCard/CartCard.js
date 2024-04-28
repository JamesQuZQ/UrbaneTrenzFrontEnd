import { Typography, Card, Box} from "@mui/material";
import CartItem from './components/CartItem'

export default function CartCard(props) {

  var {data} = props

  const listItems = data&&data.length!=0 ? 
  Object.keys(data).map(product => 
    <CartItem 
    key={data[product].details.ProductID} 
    item={data[product].details}
    count={data[product].count} />
  ):<Box>No Items </Box>;

  return (
    <div className="CartCard">
      <Card sx={{
        ml: 3,
        mt: 2,
        p: 1
        }}>
        <Typography
          variant="h5"
          sx={{m:1}}
        >
          Review Item Details
        </Typography>
        {
          listItems
        }

      </Card>
    </div>
  );
}
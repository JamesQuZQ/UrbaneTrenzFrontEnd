import { Card, Divider, Box, Typography, Button, Alert } from "@mui/material";
import { Link } from 'react-router-dom';

export default function SummaryCard(props) {

  var {data} = props;

  function placeOrder(){
    fetch(`http://localhost:5000/api/placeOrder`,{
      method: "GET",
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((result) => {
      if (result.error){
        alert('One of the items you selected was sold out!');
        window.location = '/cart';
      } else {
        window.location = '/confirm';
      }
    });
  }

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
        minWidth: 320,
        mt: 3,
        mr: 3,
        p: 1
        }}>

        <Box 
          display="flex" 
          justifyContent="center"
          sx={{m:1, mb:2}}
        >
          <Button 
            variant="contained"
            fullWidth={true}
            component={Link}
            sx={{borderRadius: 25}}
            onClick={placeOrder}
          >
            Place Order
          </Button>
        </Box>

        <Divider/>

        <Typography
          sx={{ fontWeight: 'bold', m:1, mt:2, mb:2 }}
          variant="h6"
        >
          Order Summary
        </Typography>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1, mb:2}}
        >
          <Box display="flex">
            <Typography
              variant="body2"
            >
              Item(s) total:
            </Typography>
          </Box>

          <Typography
            variant="body2"
          >
            ${data?sum():0}
          </Typography>
        </Box>

        {/* <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
          >
            Item(s) discount:
          </Typography>

          <Typography
            variant="caption"
          >
            10% off first purchase
          </Typography>
        </Box> */}

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1, mb:2}}
        >
          <Typography
            variant="body2"
          >
            Tax
          </Typography>

          <Typography
            variant="body2"
          >
            ${data?parseInt(sum()*0.1, 10):0}
          </Typography>
        </Box>

        <Divider/>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1, mt:2, mb:2}}
        >
          <Typography
            variant="body2"
          >
            Shipping
          </Typography>

          <Typography
            variant="caption"
            color="green"
          >
            FREE
          </Typography>
        </Box>

        <Divider/>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1, mt:2, mb:2}}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
          >
            Order Total (GST included):
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            color="green"
          >
            ${data?parseInt(sum()*1.1, 10):0}
          </Typography>
        </Box>

      </Card>
    </div>
  );
}
import { Card, Divider, Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export default function SummaryCard() {
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
            to="/checkout"
            sx={{borderRadius: 25}}
          >
            Proceed to Checkout
          </Button>
        </Box>

        <Divider/>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Box display="flex">
            <Typography
              sx={{ fontWeight: 'bold' }}
              variant="body1"
            >
              Subtotal
            </Typography>
            <Typography 
              variant="body1"
              sx={{pl: 0.5}}
            >
               (3 items)
            </Typography>
          </Box>

          <Typography
            variant="body1"
          >
            $1000
          </Typography>
        </Box>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
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
            Free
          </Typography>
        </Box>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
          >
            Tax
          </Typography>

          <Typography
            variant="caption"
          >
            Calculated at Checkout
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
            Coupon
          </Typography>

          <Typography
            variant="caption"
          >
            10% off first purchase
          </Typography>
        </Box> */}

        <Divider/>

        <Box 
          display="flex"
          justifyContent="space-between"
          sx={{m:1}}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
          >
            Estimated Total:
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            color="green"
          >
            $1000
          </Typography>
        </Box>

      </Card>
    </div>
  );
}
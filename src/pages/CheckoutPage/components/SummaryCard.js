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
            $1000
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
            $100
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
            $1000
          </Typography>
        </Box>

      </Card>
    </div>
  );
}
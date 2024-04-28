import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ShopItem(props) {

  const {item} = props

  function addToCart(){
    fetch(`http://localhost:5000/api/addCart?productID=${item["ProductID"]}`,{
      method: "GET",
      credentials: 'include'
  })
    .then((result) => {
      
    });
  }

  return (
    <Card sx={{
      maxWidth: 240,
      m: 1,
      p: 1,
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item["ImageURL"]}
          alt="test"
          sx={{objectFit: "contain"}}
        />
        <CardContent
          sx = {{
            height: 85
          }}
        >
          <Typography 
            gutterBottom 
            variant="body1" 
            component="div"
            sx = {{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {item["ProductTitle"]}
          </Typography>
          <Box display='flex' justifyContent="space-between">
            <Typography variant="body1" color="text.secondary">
              ${item["Price"]}
            </Typography>
            <Typography variant="caption" color={item["StockCount"] != 0 ? "green": "red"}>
              {item["StockCount"] != 0 ? "In Stock": "Out of Stock"}
            </Typography>
          </Box>

          <Typography sx={{mt:0.5, fontSize:12}} color="text.secondary">
            {item["Gender"]}|{item["SubCategory"]}|{item["Colour"]}|{item["ProductUsage"]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid container justifyContent="center">
        <Button 
          variant="contained" 
          size="md" 
          sx={{m:1}} 
          disabled={item["StockCount"] == 0}
          onClick={addToCart}          
          endIcon={<AddShoppingCartIcon/>}
        >
          Add to cart
        </Button>
      </Grid>
    </Card>
  )
}

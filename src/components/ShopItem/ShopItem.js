import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ShopItem() {
  return (
    <Card sx={{
      maxWidth: 240,
      m: 1
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/test.jpg"
          alt="test"
          sx={{objectFit: "contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid container justifyContent="center">
        <Button variant="contained" size="md" sx={{m:1}} endIcon={<AddShoppingCartIcon/>}>
          Add to cart
        </Button>
      </Grid>
    </Card>
  )
}

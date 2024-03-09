import React from 'react'
import Grid from '@mui/material/Grid';
import ShopItem from '../components/ShopItem/ShopItem';

export default function Items() {
  return (
    <Grid
      container
      spacing={0}
      justify="center"
      columns={30}
    >
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
      <Grid item sm={7} md={6} lg={5}>
        <ShopItem />
      </Grid>
    </Grid>
  )
}

import { Typography, Card, CardContent, CardMedia, CardActionArea, 
  Grid, Box, Button, IconButton, Icon } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ThemeProvider, createTheme } from "@mui/material/styles";



const { palette } = createTheme();
const theme = createTheme({
  palette: {
    pureBlack: palette.augmentColor({ 
      color:{
        main: '#0000000'
      }
    }),
  }
});

export default function CartItem(props) {

  var {item, count} = props;

  return (
    <div className="CartItem">
      <Card sx={{
        maxHeight: 200,
        m: 1,
        p: 2
        }}>
        {/* Contains item row and quantity row */}
        <Grid
          container
          direction="column"
          spacing={0}
          columns={5}
          sx={{width:"100%"}}
        >
          <Grid
            item
            md={4}
            xs={4}
            container
            spacing={0}
            columns={10}
          >
            <Grid item md={2} xs={2}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item["ImageURL"]}
                  alt="test"
                  sx={{objectFit: "contain"}}
                />
              </CardActionArea>
            </Grid>
            <Grid item md={6} xs={6}>
              <Grid 
                container 
                direction="column"
                spacing={0}
                columns={10}
                
              >
                <Grid item md={3}>
                  <CardActionArea>
                    <Typography
                      variant="body1" 
                      sx={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        mb:0.5
                      }}
                      >
                      {item["ProductTitle"]}
                    </Typography>
                  </CardActionArea>
                </Grid>
                <Grid item md={1}>
                  <Typography variant="caption" color="green">
                    {item["StockCoung"] != 0 ? "In Stock": "Out of Stock"}
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  {item["Gender"]}|{item["SubCategory"]}|{item["Colour"]}|{item["ProductUsage"]}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1} xs={1}>
              <Box sx={{ display: 'flex' }}></Box>
            </Grid>
            
            {/* Price Column */}
            <Grid item md={1} xs={1}>
              <Typography variant="body2" color="text.secondary">
                ${item["Price"]}
              </Typography>
            </Grid>
          </Grid>  
          
          {/* Row for adjusting quanities */}
          <Grid
            item
            md={4}
            xs={4}
            justifyContent="flex-end"
            alignItems='flex-end' 
            container
            spacing={0}
            columns={20}
          >
            <ThemeProvider theme={theme}>

              <Grid item md={3} sm={6}>
                <Grid 
                  container 
                  spacing={0} 
                  columns={3} 
                  justifyContent='center'
                  alignItems='stretch' 
                  sx={{height:'100%'}}
                >
                  <Grid item md={1} xs={1}>
                    <Box
                        sx={{
                          border:'1px solid darkgray',
                          height:'100%',
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        x{count}
                    </Box>
                  </Grid>

                </Grid>
              </Grid>
              <Grid item md={.5} xs={1}></Grid>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
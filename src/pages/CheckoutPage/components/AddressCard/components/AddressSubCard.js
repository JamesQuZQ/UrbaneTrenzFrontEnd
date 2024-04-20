import * as React from 'react';

import { Typography, Card, Box, Button, Fab, CardActionArea, 
  CardContent, CardActions} from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function AddressSubCard(props) {

  const {addressData, handleClickOpen} = props;

  return (
    <div className="AddressCard">
      <Card sx={{
        m: 1,
        p: 1,
        border: "5px solid blue",
        borderImage:"repeating-linear-gradient(47deg, white, white 5%, dodgerblue 4%, dodgerblue 10%, white 9%, white 15%, tomato 14%, tomato 20% ) 5"
        }}>
          {
            addressData === null ? (
              <CardActionArea
                onClick={handleClickOpen}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  sx={{m:2}}
                >
                  <Typography variant="body2">
                    Please add your first address
                  </Typography>
                  <AddBoxOutlinedIcon 
                    sx={{color: "Gray"}}
                  />
                </Box>
              </CardActionArea>
            ) : (
              <Box display="flex" alignItems="flex-start">
                <CardActionArea sx={{zIndex:10}}>
                  <CardContent>
                    <Box 
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                    >
                      <Box sx={{m:1}}>
                        <Typography
                          variant="body2"
                          sx={{fontWeight: "bold"}}
                        >
                          {addressData.firstname} {addressData.lastname}
                        </Typography>
                        <Typography
                          variant="body2"
                        >
                          {addressData.address}
                        </Typography>
                        <Typography
                          variant="body2"
                        >
                          {addressData.city}, {addressData.state} {addressData.postcode}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button 
                    onClick={handleClickOpen}
                    sx={{textTransform:"none"}}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Box>
            )
          }
      </Card>
    </div>
  );
}
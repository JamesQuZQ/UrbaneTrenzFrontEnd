import * as React from 'react';

import { Typography, Card, Grid, Button, Box, Link, FormControl, 
  RadioGroup, FormControlLabel, Radio} from "@mui/material";
  
export default function CartCard() {

  return (
    <div className="CartCard">
      <Card sx={{
        ml: 3,
        mt: 2,
        p: 1
        }}>
        <Typography
          variant="body1"
          sx={{
            m:1,
            fontWeight:"bold",
          }}
        >
          Payment Method
        </Typography>
        <FormControl sx={{ml:2}}>
          <RadioGroup
            defaultValue="master"
            name="radio-buttons-group"
            sx={{mt:1}}
          >
            <FormControlLabel 
              value="master" 
              control={<Radio />} 
              label={
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    sx={{
                      height: 30,
                      width: 48,
                      mr:1,
                    }}
                    borderRadius="10px"
                    border="2px solid grey"
                    src="mastercard.png"
                  />
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{mr:1}}
                  >
                    Standard Debit Mastercard
                  </Typography>
                  <Typography
                    variant="body2"
                  >
                    ending in 1234
                  </Typography>
                </Box>
              }
            />
            <Typography
              variant="body2"
              color="gray"
              sx={{
                mt:0.5,
                ml:4
              }}
            >
              Billing Address: James Qu, 5-7 Hawken St, Unit 9, NEWTOWN, NSW 2042, Australia
            </Typography>
            <FormControlLabel 
              value="visa" 
              control={<Radio />} 
              sx={{mt:2}}
              onChange={(event)=>{
                if(event.target.checked){

                }
              }}
              label={
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    sx={{
                      height: 30,
                      width: 48,
                      mr:1,
                    }}
                    borderRadius="10px"
                    border="2px solid grey"
                    src="visacard.png"
                  />
                  <Box display="flex" alignItems="flex-end">
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{mr:1}}
                    >
                      Standard Debit Visa Card
                    </Typography>
                    <Typography
                      variant="body2"
                    >
                      ending in 4321
                    </Typography>
                  </Box>

                </Box>
              }
            />
            <Typography
              variant="body2"
              color="gray"
              sx={{
                mt:0.5,
                ml:4,
                mb:1,
              }}
            >
              Billing Address: James Qu, 5-7 Hawken St, Unit 9, NEWTOWN, NSW 2042, Australia
            </Typography>
          </RadioGroup>
        </FormControl>
        <Box>

        </Box>
      </Card>
    </div>
  );
}
import * as React from 'react';

import { Typography, Card, Grid, Button, Box, Link, FormControl, 
RadioGroup, FormControlLabel, Radio} from "@mui/material";

export default function ShippingSelector() {

  return (
    <FormControl>
      <RadioGroup
        defaultValue="free"
        name="radio-buttons-group"
        sx={{mt:1}}
      >
        <FormControlLabel 
          value="free" 
          control={<Radio />} 
          sx={{mb:1}}
          label={
            <Box
              display="flex"
              flexDirection="column"
            >
              <Box>
                <Typography 
                  variant="caption" 
                  sx={{
                    fontSize: 15
                  }}
                >
                  Standard:&nbsp;
                </Typography>
                <Typography 
                  variant="caption" 
                  color="green"
                  sx={{
                    fontSize: 15
                  }}
                >
                  Free
                </Typography>
              </Box>
              <Typography variant="body2">
                Delivery: by May 17th
              </Typography>
            </Box>
          }
        />
        <FormControlLabel 
          value="expedited" 
          control={<Radio />} 
          sx={{mb:1}}
          label={
            <Box
              display="flex"
              flexDirection="column"
            >
              <Typography 
                variant="caption" 
                sx={{
                  fontSize: 15
                }}
              >
                Expedited: $7.99
              </Typography>
              <Typography variant="body2">
                Delivery: by May 17th
              </Typography>
            </Box>
          }
        />
        <FormControlLabel 
          value="express" 
          control={<Radio />}
          sx={{mb:1}}
          label={
            <Box
              display="flex"
              flexDirection="column"
            >
              <Typography 
                variant="caption" 
                sx={{
                  fontSize: 15
                }}
              >
                Express: $9.99
              </Typography>
              <Typography variant="body2">
                Delivery: by May 17th
              </Typography>
            </Box>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
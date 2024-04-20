import * as React from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField, Dialog, DialogActions, DialogContent,
DialogContentText, DialogTitle, InputLabel, Select, MenuItem, 
FormControl} from "@mui/material";

export default function AddressForm(props){
  const validatePhone = (str) => {
    console.log(errors.phone)
    if(!/^0[0-9]{9}$/.test(str)) 
      return"Invalid phone number format";
    else return false;
  }

  const validateEmail = (str) => {
    if(!/^\S+@\S+\.\S+$/.test(str)) 
      return"Invalid email format";
    else return false;
  }

  const { register, handleSubmit, formState: { errors },} = useForm({
    mode: "onBlur"
  });
  const [data, setData] = React.useState("");

  return(
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit((data)=>{
          setData(JSON.stringify(data));
          console.log(data);
          props.handleClose();
        })
      }}
    >
      <DialogTitle>Edit Address</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Add a new address to your account
        </DialogContentText>
        <TextField
          {...register("firstName")}
          sx={{width: '48.4%', mr:"3%"}}
          margin="normal"
          required
          id="firstname"
          label="First Name"
          defaultValue=""
        />
        <TextField
          {...register("lastName")}
          sx={{width: '48.4%'}}
          margin="normal"
          required
          id="lastname"
          label="Last Name"
          defaultValue=""
        />
        <TextField
          {...register("phone", {validate: validatePhone})}
          sx={{width: '99.8%'}}
          margin="normal"
          required
          id="phone"
          error={errors.phone?.message!==false&&errors.phone?.message!==undefined}
          helperText={errors.phone?.message}
          label="Phone Number"
          defaultValue=""
        />
        <TextField
          {...register("address")}
          sx={{width: '99.8%'}}
          margin="normal"
          required
          multiline
          maxRows={4}
          id="address"
          label="Street Address"
          defaultValue=""
        />
        <TextField
          {...register("city")}
          sx={{width: '35%', mr:"3%"}}
          margin="normal"
          required
          id="city"
          label="City/Suburb"
          defaultValue=""
        />
        <FormControl 
          sx={{width: '35%', mr:"3%"}}
          margin="normal"
          >
          <InputLabel required>State/Territory</InputLabel>
          <Select
            {...register("state")}
            id="state"
            required
            label="State/Territory"
            defaultValue="NSW"
          >
            <MenuItem value={'NSW'}>NSW</MenuItem>
            <MenuItem value={'VIC'}>VIC</MenuItem>
            <MenuItem value={"QLD"}>QLD</MenuItem>
            <MenuItem value={"WA"}>WA</MenuItem>
            <MenuItem value={"SA"}>SA</MenuItem>
            <MenuItem value={"TAS"}>TAS</MenuItem>
            <MenuItem value={"ACT"}>ACT</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
        <TextField
          {...register("postcode")}
          sx={{width: '23.8%'}}
          margin="normal"
          required
          id="postcode"
          label="Postcode"
          defaultValue=""
        />
        <TextField
          {...register("email", {validate: validateEmail})}
          sx={{width: '99.8%'}}
          margin="normal"
          required
          multiline
          maxRows={4}
          id="email"
          label="Email Address"
          error={errors.email?.message!==false&&errors.email?.message!==undefined}
          helperText={errors.email?.message}
          defaultValue=""
        />
      </DialogContent>
      
      <DialogActions sx={{m:1}}>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button variant="contained" type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  )
}
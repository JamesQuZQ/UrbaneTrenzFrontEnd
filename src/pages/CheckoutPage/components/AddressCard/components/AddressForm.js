import * as React from 'react';
import { useForm } from "react-hook-form";
import { Button, TextField, Dialog, DialogActions, DialogContent,
DialogContentText, DialogTitle, InputLabel, Select, MenuItem, 
FormControl} from "@mui/material";

export default function AddressForm(props){
  const validatePhone = (str) => {
    if(!/^0[0-9]{9}$/.test(str)) 
      return"Invalid phone number format";
    else return true;
  }

  const validateEmail = (str) => {
    if(!/^\S+@\S+\.\S+$/.test(str)) 
      return"Invalid email format";
    else return true;
  }

  const handleClose = (event, reason) => {
    console.log(event)
    if (reason && reason === "backdropClick") 
      return;
    props.handleClose();
  }

  const formSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    props.setData(data);
    handleClose();
  }

  const { register, handleSubmit, formState: { errors }} = useForm({
    mode: "onBlur | onSubmit"
  });

  return(
    <Dialog
      open={props.open}
      onClose={handleClose}
      fullWidth
      disableEscapeKeyDown
      PaperProps={{
        component: 'form',
        onSubmit:handleSubmit(formSubmit)
      }}
    >
      <DialogTitle>Edit Address</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Add a new address to your account
        </DialogContentText>
        <TextField
          {...register("firstname")}
          sx={{width: '48.4%', mr:"3%"}}
          margin="normal"
          required
          label="First Name"
          defaultValue={props.data===null?"":props.data.firstname}
        />
        <TextField
          {...register("lastname")}
          sx={{width: '48.4%'}}
          margin="normal"
          required
          label="Last Name"
          defaultValue={props.data===null?"":props.data.lastname}
        />
        <TextField
          {...register("phone", {validate: validatePhone})}
          sx={{width: '99.8%'}}
          margin="normal"
          required
          error={errors.phone?.message==="Invalid phone number format"}
          helperText={errors.phone?.message}
          label="Phone Number"
          defaultValue={props.data===null?"":props.data.phone}
        />
        <TextField
          {...register("address")}
          sx={{width: '99.8%'}}
          margin="normal"
          required
          multiline
          maxRows={4}
          label="Street Address"
          defaultValue={props.data===null?"":props.data.address}
        />
        <TextField
          {...register("city")}
          sx={{width: '35%', mr:"3%"}}
          margin="normal"
          required
          label="City/Suburb"
          defaultValue={props.data===null?"":props.data.city}
        />
        <FormControl 
          sx={{width: '35%', mr:"3%"}}
          margin="normal"
          >
          <InputLabel required>State/Territory</InputLabel>
          <Select
            {...register("state")}
            required
            label="State/Territory"
            defaultValue={props.data===null?"NSW":props.data.state}
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
          label="Postcode"
          defaultValue={props.data===null?"":props.data.postcode}
        />
        <TextField
          {...register("email", {validate: validateEmail})}
          sx={{width: '99.8%'}}
          margin="normal"
          required
          multiline
          maxRows={4}
          label="Email Address"
          error={errors.email?.message==="Invalid email format"}
          helperText={errors.email?.message}
          defaultValue={props.data===null?"":props.data.email}
        />
      </DialogContent>
      
      <DialogActions sx={{m:1}}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit">Save</Button>
      </DialogActions>
    </Dialog>
  )
}
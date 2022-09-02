import React from "react";
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';


const LoginComponent = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="email-input">Email address</InputLabel>
      <Input type="email" id="email-input" aria-describedby="email-helper" color="primary" />
      <FormHelperText id="email-helper">We'll never share your email.</FormHelperText>
    </FormControl>
  )

}

export default LoginComponent;


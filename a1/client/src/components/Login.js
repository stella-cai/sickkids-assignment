import React, { useState } from 'react';
import './Login.css';
import { Typography, TextField, InputAdornment, Button, IconButton, Divider } from '@mui/material'
import {Email, Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // handle button click of login form
  const handleLogin = () => {
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };  

  return (
    <div className='container'>
      <img className='image' src='/login_image.png' />
      <div className='main-content'>

        <Typography className='login-text' sx={{ fontWeight: 'bold'}} variant='h3' component='h2'>
          Log in
        </Typography>

        <div className='fields-container'>
          <TextField className='text-field' variant='outlined' sx={{ my: 2 }} placeholder='Email' type='email'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Email />
                </InputAdornment>
              ),
            }}
          />

          <TextField className='text-field' variant='outlined' sx={{ my: 2 }} placeholder='Password' 
          type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              ),
            }}
          />

          <Button id='login-button' variant='contained' onClick={handleLogin}>
            <Typography sx={{ fontWeight: 'bold', my: 0.1 }} variant='h5' component='h2'>
              Log in
            </Typography>
          </Button>

        </div>
        <div className='signup-container'>
            <div className='or-text-row'>
              <hr className='or-text-hr'/>
              Or
              <hr className='or-text-hr'/>
            </div>
            <div className='signup-text-row'>
              Don't have an account
              <a href={null} onClick={() => {}} id='signup-button'>
              Sign up
              </a>
            </div>
        </div>

      </div>

    </div>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
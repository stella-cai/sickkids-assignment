import React, { useState } from 'react';
import './Login.css';
import { Typography, TextField, InputAdornment, Button, IconButton, Divider } from '@mui/material'
import { Email, Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux';
import { login } from '../reducers/userStatusReducer';
import { useMediaQuery } from 'react-responsive';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

  // handle button click of login form
  const handleLogin = async () => {
    try {
      const user = await axios.post('/login', {
        email,
        password,
      });
      console.log('user.data :>> ', user.data);
      Cookies.set('access', user.data.accessToken);
      Cookies.set('email', user.data.email);

      dispatch(login());
    } catch (err) {
      console.log(err);
      console.log('err.response.data :>> ', err.response.data);
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const renderDesktopView = () => {
    return (
      <div id='login-container'>
        <img id='image' src='/login_image.png' />
        <div id='main-content'>

          <Typography id='login-text' sx={{ fontWeight: 'bold' }} variant='h3' component='h2'>
            Log in
          </Typography>

          <div id='fields-container'>
            <TextField className='text-field' variant='outlined' sx={{ my: 2 }} placeholder='Email' type='email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                ),
              }}
              {...email}
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
              {...password}
            />

            <Button id='login-button' variant='contained' onClick={handleLogin}>
              <Typography sx={{ fontWeight: 'bold', my: 0.1 }} variant='h5' component='h2'>
                Log in
              </Typography>
            </Button>

          </div>
          <div id='signup-container'>
            <div id='or-text-row'>
              <hr className='or-text-hr' />
              Or
              <hr className='or-text-hr' />
            </div>
            <div id='signup-text-row'>
              Don't have an account
              <a href={null} onClick={() => { }} id='signup-button'>
                Sign up
              </a>
            </div>
          </div>

        </div>

      </div>
    )
  }

  const renderMobileView = () => {
    return (
      <div id='main-content-mobile'>
        <Typography id='login-text-mobile' variant='h4' component='h2'>
          Log in
        </Typography>

        {/* <div id='fields-container'> */}
        <TextField className='text-field' variant='outlined' sx={{ my: 2 }} placeholder='Email' type='email'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Email />
              </InputAdornment>
            ),
          }}
          {...email}
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
          {...password}
        />

        <a href={null} onClick={() => { }} id='forgot-password-button'>
          Forgot your password?
        </a>

        <Button id='login-button-mobile' variant='contained' onClick={handleLogin}>
          <Typography sx={{ fontWeight: 'bold', my: 0.1 }} variant='h5' component='h2'>
            Log in
          </Typography>
        </Button>

      </div>
    )
  }
  return (
    <div>
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  )
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
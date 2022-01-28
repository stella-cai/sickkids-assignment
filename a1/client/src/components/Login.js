import React, { useState } from 'react';
import './Login.css';
// import LoginImage from 'login_image.png';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }
 
  return (
    <div className='container'>
      <img className='image' src='/login_image.png' />
      <div className='main-content'>
        <h1>
          Log in
        </h1>
        <div>
          Username<br />
          <input type='text' {...username} autoComplete='new-password' />
        </div>
        <div style={{ marginTop: 10 }}>
          Password<br />
          <input type='password' {...password} autoComplete='new-password' />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input type='button' value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />

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
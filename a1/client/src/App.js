import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './reducers/userStatusReducer';

function App() {
  const loggedIn = useSelector(state => state.userStatus.value);
  const [access, setAccess] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    authenticate();
  });

  const authenticate = () => {
    let access = Cookies.get('access');
    if (access && access !== undefined) {

      setAccess(access);
      dispatch(login());
    } else {
      Cookies.remove('access');
      Cookies.remove('email');
      dispatch(logout()); // sets global user state to logged out with Redux
    }
  }

  return (
    <BrowserRouter>
      {loggedIn ?
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
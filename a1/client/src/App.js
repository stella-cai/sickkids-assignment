import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
 
import Login from './components/Login';
// import Dashboard from './Dashboard';
// import Home from './Home';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
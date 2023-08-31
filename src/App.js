import React from 'react';
import Login from "./components/login_form/index.js";
import Register from "./pages/register.js";


import Profile from "./pages/profilepage";
import Home from "./pages/home";
// import Friends from "./pages/friendslist";
import { Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </div>
  );
};
export default App;
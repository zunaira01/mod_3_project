import React from 'react';
import Login from "./components/login";
import Register from "./components/registerform";
import Profile from "./pages/profilepage";
import Home from "./pages/home";
import { Route, Routes } from 'react-router-dom';
import './index';

function App() {
  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registerform" element={<Register/>}/>
        <Route path="/profilepage" element={<Profile/>}/>
      </Routes>
    </div>
  );
};
export default App;

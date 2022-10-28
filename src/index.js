import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import{
  BrowserRouter,
  Routes,
  Route,
}from 'react-router-dom'
import Login from './components/LandingPage/login';
import NavBar from './components/Navbar';
import About from './components/About';
import FileProcessing from './components/LandingPage/fileProcessing';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<NavBar />} />
      <Route path='/about' element={<About />} />
      <Route path='/fileprocessing' element={<FileProcessing />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

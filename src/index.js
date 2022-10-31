import React from 'react';
import ReactDOM from 'react-dom/client';
import Protected from "./Protected";

import{
  BrowserRouter,
  Routes,
  Route,
}from 'react-router-dom'

import Login from './components/Login';
import NavBar from './components/Navbar';
import About from './components/About';
import FileProcessing from './components/FileProcessing';
import Blog from './components/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
     <Routes>
       <Route path='/' element= {
         <Login />
       } />
       <Route path='/dashboard' element= {
         <Protected><NavBar /></Protected>
       } />
       <Route path='/about' element= {
         <Protected><About /></Protected>
       } />
       <Route path='/blog' element= {
         <Protected><Blog /></Protected>
       } />
       <Route path='/fileprocessing' element= {
         <Protected><FileProcessing /></Protected>
       } />
     </Routes>
   </BrowserRouter>
);


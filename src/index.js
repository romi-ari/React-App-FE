import React from 'react';
import ReactDOM from 'react-dom/client';
import Protected from "./Protected";
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers';
import App from './App';
import {About, Blog, FileProcessing, NavBar,} from './components'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {
            <App />
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
    </Provider>
  </React.StrictMode>
);


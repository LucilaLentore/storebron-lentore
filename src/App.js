import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router';

const App = props =>{
    
  return<>
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
  </>
}

export default App;

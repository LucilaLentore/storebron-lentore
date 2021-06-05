import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import React from 'react';

const App = props =>{
    
  return<>
    <NavBar />
    <ItemListContainer userName="Ale"/>
  </>
}

export default App;

import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';
import React from 'react';

const App = props =>{
    
  return<>
    <NavBar />
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
}

export default App;

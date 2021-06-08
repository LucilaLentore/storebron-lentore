import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { Counter } from './components/Counter/Counter'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import React from 'react';

const App = props =>{
    
  return<>
    <NavBar />
    <ItemListContainer userName="Ale"/>
    <Counter stock={5} valorInicial={1}/>
  </>
}

export default App;

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer'
import { NavBar } from '../components/NavBar/NavBar';
import { Cart } from '../screens/Cart/Cart';

export const Router = () =>{
    return <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">
                <ItemListContainer/>
            </Route>
            <Route exact path="/category/:categoryId">
                <ItemListContainer/>
            </Route>
            <Route exact path="/product/:productId">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
        </Switch>
    </BrowserRouter>
}
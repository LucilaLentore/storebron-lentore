import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { CartMessage } from './components/CartMessage/CartMessage';
import { CartGrid } from './components/CartGrid/CartGrid';

export const Cart = () => {
    const {itemsCart} = useContext(CartContext)

    return<>
      {
        itemsCart.length === 0 ? <CartMessage/> : <CartGrid/>
      }
    </>

}
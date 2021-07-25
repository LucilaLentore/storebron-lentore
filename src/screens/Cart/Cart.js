import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { CartMessage } from './components/CartMessage/CartMessage';
import { CartGrid } from './components/CartGrid/CartGrid';
import { FinalizarCompra } from './components/FinalizarCompra/FinalizarCompra';
import { OrderMessage } from './components/OrderMessage/OrderMessage';

export const Cart = () => {
    const {itemsCart, orderData} = useContext(CartContext)

    return<>
      {
        itemsCart.length === 0 ? <CartMessage/> 
        :
        <>
          {
            orderData ? <OrderMessage/> :
            <>
              <CartGrid/>
              <FinalizarCompra/>
            </>
          }
        </> 
      }
    </>

}
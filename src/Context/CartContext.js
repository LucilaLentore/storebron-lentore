import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {

    const [itemsCart, setItemsCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0)  
    const [itemsQuantity, setItemsQuantity] = useState(0)
    const [orderData, setOrderData] = useState('')   
    
    const addItem = productoAgregado => {
        setSubTotal(subTotal + (productoAgregado.item.price * productoAgregado.quantity))
        setItemsQuantity(itemsQuantity + productoAgregado.quantity)
        const producto = itemsCart.find(itemCart => itemCart.item.id === productoAgregado.item.id)
        if (producto){
            const actualizarItem = producto.quantity + productoAgregado.quantity
            producto.quantity = actualizarItem
            setItemsCart(itemsCart)   
        } else {
        setItemsCart(productosAgregados => [...productosAgregados, productoAgregado])
        }   
    }

    const clear = () => {
        setItemsCart([])
        setItemsQuantity(0)
        setSubTotal(0)
        setOrderData('')
    }

    const removeItem = id => {
        const selectRemoveItem = itemsCart.find(itemCart => itemCart.item.id === id);
        setSubTotal(subTotal - (selectRemoveItem.item.price * selectRemoveItem.quantity))
        setItemsQuantity(itemsQuantity - selectRemoveItem.quantity)
        setItemsCart(itemsCart.filter((item) => item.item.id !== id));
    }

    const updateOrderData = id =>{
        setOrderData(id)
    }

    return <CartContext.Provider value={{itemsCart, addItem, clear, removeItem, subTotal, itemsQuantity, orderData, updateOrderData}}>
        {props.children}
    </CartContext.Provider>
}
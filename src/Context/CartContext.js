import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext();

export const CartComponentContext = props => {

    const [itemsCart, setItemsCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0)  
    const [itemsQuantity, setItemsQuantity] = useState(0)   
    

    const IsInCart = idProducto => {
        itemsCart.find(itemCart => itemCart.item.id === idProducto)
    }

    const addItem = productoAgregado => {
        setSubTotal(subTotal + (productoAgregado.item.price * productoAgregado.quantity))
        setItemsQuantity(itemsQuantity + productoAgregado.quantity)
        if (IsInCart(productoAgregado.item.id)){
            const actualizarItem = itemsCart.map((itemCart) => {                        
                const cantidadTotal = itemCart.quantity + productoAgregado.quantity; 
                if (itemCart.item.id === productoAgregado.item.id){                     
                    return {...itemCart, quantity: cantidadTotal}
                }
                return {itemCart}
            })
            setItemsCart(actualizarItem)
        } else{
            setItemsCart(productosAgregados => [...productosAgregados, productoAgregado])
        }
    }

    const clear = () => {
        setItemsCart([])
        setItemsQuantity(0)
        setSubTotal(0)
    }

    const removeItem = id => {
        const selectRemoveItem = itemsCart.find(itemCart => itemCart.item.id === id);
        setSubTotal(subTotal - (selectRemoveItem.item.price * selectRemoveItem.quantity))
        setItemsQuantity(itemsQuantity - selectRemoveItem.quantity)
        setItemsCart(itemsCart.filter((item) => item.item.id !== id));
    }

    useEffect(() => {
        console.log('Carrito Actualizado:', itemsCart)
    }, [itemsCart])

    return <CartContext.Provider value={{itemsCart, addItem, clear, removeItem, subTotal, itemsQuantity}}>
        {props.children}
    </CartContext.Provider>
}
import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext();

export const CartComponentContext = props => {

    const [itemsCart, setItemsCart] = useState([]);     

    const IsInCart = idProducto => {
        itemsCart.find(itemCart => itemCart.item.id === idProducto)
    }

    const addItem = productoAgregado => {
        if (IsInCart(productoAgregado.item.id)){
            const actualizarItem = itemsCart.map((itemCart) => {                        
                const cantidadTotal = itemCart.quantity + productoAgregado.quantity;    
                if (itemCart.item.id === productoAgregado.item.id){                     
                    return {...itemCart, quantity: cantidadTotal}
                }
                return itemCart
            })
            setItemsCart(actualizarItem)
        } else{
            setItemsCart(productosAgregados => [...productosAgregados, productoAgregado])
        }
    }

    const clear = () => {
        setItemsCart([])
    }

    const removeItem = id => {
        setItemsCart(itemsCart.filter((item) => item.item.id !== id));
    }

    useEffect(() => {
        console.log('Carrito Actualizado:', itemsCart)
    }, [itemsCart])

    return <CartContext.Provider value={{itemsCart, addItem, clear, removeItem}}>
        {props.children}
    </CartContext.Provider>
}
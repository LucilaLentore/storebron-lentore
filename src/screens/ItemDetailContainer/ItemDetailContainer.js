import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'

const myPromiseDetalleProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
                {
                    id: 28, 
                    title: 'Camiseta Denver Nuggets - Facu Campazzo', 
                    description: 'Camiseta original de los Denver Nuggets', 
                    price: 12000,
                    picture:{
                        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/229/661/products/1461-4b972fc66cdda00eff16103005910492-480-0.jpg',
                        alt: "Camiseta original de los Denver Nuggets"
                    },
                    stock: 3,
                    dimensions:{
                        size: 'L',
                        width: 56,
                        lenght: 80
                    },
                    freeShipping: true,
                    material: 'Lycra'
                }
        ), 2000)
    })
}

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])

    useEffect( () => {
        myPromiseDetalleProducto()
        .then(response => setDetalleProducto(response))
        .catch(error => console.log(error))
    }, []);

    return<>
        <ItemDetail detalleProducto={detalleProducto}/>
    </>
}

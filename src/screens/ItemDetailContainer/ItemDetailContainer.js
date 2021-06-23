import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { myPromise } from '../../Services/Promise/Promise.js';

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const {productId} = useParams();

    useEffect( () => {
        myPromise()
        .then(response => {
            console.log(response)
            setDetalleProducto(response.filter(element => element.id === parseInt(productId)))
        }
        )
    }, [productId]);

    return<>
        {
            detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/> )
        }
        
    </>
}

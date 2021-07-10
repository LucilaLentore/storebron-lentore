import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { myPromise } from '../../Services/Promise/Promise.js';
import { dataBase } from '../../Firebase/firebase.js';

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const {productId} = useParams();

    useEffect(()=>{
        const itemCollection = dataBase.collection("productos");
        const item = itemCollection.doc(productId)

        item.get().then((doc) =>{
            if (!doc.exists){
                console.log('No existe')
                return;
            }
            setDetalleProducto([{id: doc.id, ...doc.data()}])
            debugger;
        }).catch((error) =>{
            console.log('Error', error)
        })
    }, [])

    return<>
        {
            detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/> )
        }
        
    </>
}

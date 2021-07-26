import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase.js';
import { Alerta } from '../../components/Alerta/Alerta'

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const [error, setError] = useState(false)
    const {productId} = useParams();

    useEffect(()=>{
        setError(false)
        const itemCollection = dataBase.collection("productos");
        const item = itemCollection.doc(productId)

        item.get().then((doc) =>{
            if (!doc.exists){
                setError(true)
                return;
            }
            setDetalleProducto([{id: doc.id, ...doc.data()}])
        }).catch((error) =>{
            setError(true)
        })
    }, [productId]) // eslint-disable-next-line react-hooks/exhaustive-deps

    return<>
        {
            error ? <Alerta/> 
            :  detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/>)
        }
        
    </>
}

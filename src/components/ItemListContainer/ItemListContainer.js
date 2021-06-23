import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom';
import { myPromise } from '../../Services/Promise/Promise.js';

export const ItemListContainer = props => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        myPromise()
        .then(response => categoryId === undefined ?
            setProductos(response)
            :
            setProductos(response.filter(element => element.category === categoryId)
        ))
    }, [categoryId])

    return<>
        <ItemList productos={productos}/>
    </>
}
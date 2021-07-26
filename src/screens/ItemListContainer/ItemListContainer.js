import React, { useEffect, useState } from 'react';
import { ItemList } from './components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase'
import { Alerta } from '../../components/Alerta/Alerta';

export const ItemListContainer = props => {

    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false)
    const {categoryId} = useParams();

    useEffect(() =>{
        const itemCollection = dataBase.collection("productos");
        setError(false)
        if (categoryId === undefined){
            itemCollection.get().then((querySnapshot) =>{
                if(querySnapshot.size === 0){
                    setError(true)
                }
                setProductos(querySnapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )));
            }).catch((error) => {
                setError(true)
            })
        }else{
            itemCollection.where("category", "==", categoryId).get().then((querySnapshot) =>{
                if(querySnapshot.size === 0){
                    setError(true)
                }
                setProductos(querySnapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )));
            }).catch((error) => {
                setError(true)
            })
        }
    }, [categoryId])

    return<>
        {
            error ? <Alerta/> :
            <ItemList productos={productos}/>
        }
    </>
}
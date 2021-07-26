import React, { useState, useContext } from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { finalizarCompraStyles } from './FinalizarCompraStyles'
import { CartContext } from '../../../../Context/CartContext';
import { dataBase } from '../../../../Firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Alerta } from '../../../../components/Alerta/Alerta'

const useStyle = makeStyles((theme) => finalizarCompraStyles(theme));

export const FinalizarCompra = props => {

    const {itemsCart, subTotal, updateOrderData} = useContext(CartContext)
    const classes = useStyle();
    const [buyerData, setBuyerData] = useState({});
    const [outOfStockArr, setOutOfStockArr] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const [error, setError] = useState(false)

    const handleChange = event => {
        const { name, value } = event.target;
        setBuyerData({ ...buyerData, [name]: value });        
    }
    
    const submitForm = event => {
        event.preventDefault();
        addOrderUpdateItems(buyerData);
    }

    const itemsToUpdate = dataBase.collection("productos")
    .where(firebase.firestore.FieldPath.documentId(), 'in', itemsCart.map(i => i.item.id));

    const createOrder = (buyer) => {
        const newOrder = {
            buyer: buyer,
            items: itemsCart,
            date: new Date(),
            total: subTotal
        }
        return newOrder;
    }
  
    const addNewOrder = (buyer) => {
        const newOrder = createOrder(buyer);
        const orders = dataBase.collection("orders");
        try {
            orders.add(newOrder).then((doc) => {
            setShowForm(false)
            updateOrderData(doc.id);
        })
        } catch(error) {
            setError(true);
        }
    }

    const addOrderUpdateItems = (buyer) => {
        itemsToUpdate.get().then((querySnapshot) => {
        const batch = dataBase.batch();
        const outOfStock = [];
            querySnapshot.docs.forEach((docSnapshot, idx) => {
                if(docSnapshot.data().stock >= itemsCart[idx].quantity){
                    batch.update(docSnapshot.ref, {'stock': docSnapshot.data().stock - itemsCart[idx].quantity});
                } else {
                    outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
                }
            })

            if(outOfStock.length === 0){
                batch.commit().then(() => {
                    addNewOrder(buyer);         
                });
            } else {
                setOutOfStockArr(outOfStock);
            }
        })
    }

    return<>
        {
            error ? <Alerta/>
            :
            <Card variant="outlined" className={classes.cardContainer}>
                <CardContent className={classes.cardContent}>
                    <form onSubmit={submitForm}>
                        <TextField id="standard-full-width" fullWidth name="nombre" label="Nombre" required onChange={handleChange}/>
                        <TextField id="standard-full-width" fullWidth name="apellido" label="Apellido" required onChange={handleChange}/>
                        <TextField id="standard-full-width" fullWidth name= "calle" label="Calle" required onChange={handleChange} />
                        <TextField id="standard-full-width" fullWidth name="numero" label="Número" required onChange={handleChange} />                
                        <TextField id="standard-full-width" fullWidth name= "telefono" label="Teléfono" required onChange={handleChange}  />
                        <TextField id="standard-full-width" fullWidth label="Email" name= "email" type="email" required onChange={handleChange} />
                        <Button type='submit' className={classes.buttonOk}>ACEPTAR</Button>    
                    </form>
                </CardContent>
            </Card>
        }
    </> 
    
    

}
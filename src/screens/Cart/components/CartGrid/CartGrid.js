import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { CartContext } from '../../../../Context/CartContext';
import { cartGridStyles } from './CartGridStyles';
import { FinalizarCompra } from '../FinalizarCompra/FinalizarCompra';
import { dataBase } from '../../../../Firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const useStyle = makeStyles((theme) => cartGridStyles(theme));

export const CartGrid = () => {

  const {itemsCart, removeItem, subTotal, clear} = useContext(CartContext)
  const classes = useStyle();
  const [orderId, setOrderId] = useState();
  const [outOfStockArr, setOutOfStockArr] = useState([]);
  const [showForm, setShowForm] = useState(true);

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
          setOrderId(doc.id);
      })
    } catch(error) {
      console.log("Firebase add doc error:", error);
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

  return<div className={classes.generalContainer}>
    <div className={classes.container}> 
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.headerTable}>
            <TableRow>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Producto</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsCart.map((item) => (
              <TableRow key={item.item.id}>
                <TableCell component="th" scope="row" align="center">
                    <img src={item.item.picture.pictureUrl} alt={item.item.picture.alt} className={classes.imgProducto}></img>
                </TableCell>
                <TableCell align="center">{item.item.title}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">$ {item.item.price}</TableCell>
                <TableCell>
                      <IconButton aria-label="delete" className={classes.delete} onClick={() => removeItem(item.item.id)}>
                          <DeleteIcon fontSize="small" />
                      </IconButton>
                  </TableCell>
              </TableRow>
            ))}
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Total:</TableCell>
            <TableCell  align="center">$ {subTotal}</TableCell>
            <TableCell></TableCell>

          </TableBody>
        </Table>
      </TableContainer>
    </div>

    <div className={classes.container}>
      <Button className={classes.buttonDelete} onClick={clear}>Vaciar carrito</Button>
    </div>
    
    <div className={classes.container}>
      {
        showForm ? <FinalizarCompra addOrder={addOrderUpdateItems}/> : 
        <div className={classes.messageOrder}>
          <Typography variant="h3">¡Gracias por tu compra!</Typography>
          <Typography>Código de pedido: {orderId}</Typography>  
        </div>

      }
    </div>

  </div>
}
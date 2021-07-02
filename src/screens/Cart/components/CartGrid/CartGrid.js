import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyle = makeStyles((theme) => cartGridStyles(theme));

export const CartGrid = () => {

    const {itemsCart, removeItem, subTotal} = useContext(CartContext)
    const classes = useStyle();

    return<div className={classes.container}>
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
}
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Context/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { orderMessageStyles } from './OrderMessageStyles';

const useStyle = makeStyles((theme) => orderMessageStyles(theme));

export const OrderMessage = () => {
    const {orderData, clear} = useContext(CartContext)
    const history = useHistory();
    const classes = useStyle();

    const goToIndex = () =>{
        clear()
        history.push(`/`)
    }

    return <div>
        <div className={classes.messageOrder}>
          <Typography variant="h3">¡Gracias por tu compra!</Typography>
          <Typography>Código de pedido: {orderData}</Typography>  
        </div>
        <div className={classes.container}>
            <Link className={classes.buttons} onClick={goToIndex}>Volver a comprar</Link>
        </div>
    </div>
}
import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { cartMessageStyles } from './CartMessageStyles'

const useStyle = makeStyles((theme) => cartMessageStyles(theme));

export const CartMessage = () =>{

    const classes = useStyle();
    const history = useHistory();

    return<div className={classes.container}>
        <Typography className={classes.text} variant="h3">No hay artículos en el carrito.</Typography> 
        <div className={classes.buttonContainer}>
            <Link className={classes.buttons} onClick={() => history.push(`/`)}>Volver a la tienda</Link>
        </div>
    </div>
}
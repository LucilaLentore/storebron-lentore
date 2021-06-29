import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Counter } from '../../../components/Counter/Counter';
import { FinishPurchaseButton } from '../../../components/FinishPurchaseButton/FinishPurchaseButton';
import { itemDetailStyles } from './ItemDetailStyles';
import { CartContext } from '../../../Context/CartContext';

const useStyle = makeStyles((theme) => itemDetailStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { detalleProducto } = props;
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [click, setClick] = useState(false)
    const {addItem, removeItem} = useContext(CartContext)

    const onAdd = cantidad => {
        setCantidadProducto(cantidad); 
        setClick(true);
        addItem({item: detalleProducto, quantity: cantidad}) 
    }

    const clickCancelar = cl =>{
        setClick(false);
        removeItem(detalleProducto.id);
    }

    return<>
        <Grid container 
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={classes.gridContainer}>
            <Grid item xs={12} lg={4}>
                <Card>
                    <CardMedia
                        component='img'
                        image= {detalleProducto.picture.pictureUrl}
                        title= {detalleProducto.picture.alt}  
                    />
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
                {(detalleProducto.freeShipping) ? <Chip label='Envío gratis' icon={<LocalShippingIcon />}></Chip> : 'Consultar costo del envío' }
                <Typography variant="h3" className={classes.titulo}>{detalleProducto.title}</Typography>
                <Typography variant="h5">{detalleProducto.description}</Typography>
                <Typography className={classes.precio}>${detalleProducto.price}</Typography>                
                <Typography variant="h6"> Material: {detalleProducto.material}</Typography>
                {
                    click ? 
                    <FinishPurchaseButton clickCancelar={clickCancelar}/>
                    :
                    <Counter stock={detalleProducto.stock} valorInicial={1}  cantidadProducto={cantidadProducto} onAdd={onAdd}/>
                }

            </Grid>
        </Grid>
    </>
}
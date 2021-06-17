import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Counter } from '../../../components/Counter/Counter';
import { itemDetailContainerStyles } from '../ItemDetailContainerStyles';

const useStyle = makeStyles((theme) => itemDetailContainerStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { detalleProducto } = props;

    return<>
        <Grid container 
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}>
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
                <Typography variant="h5" className={classes.detalle}>Detalles:</Typography>
                <Typography variant="h6"> Tela: {detalleProducto.material}</Typography>
                <Typography variant="h6"> Talle: {detalleProducto.dimensions.size}</Typography>
                <Typography variant="h6"> Ancho: {detalleProducto.dimensions.width} cm</Typography>
                <Typography variant="h6"> Largo: {detalleProducto.dimensions.lenght} cm</Typography>
                <Counter stock={detalleProducto.stock} valorInicial={1}/>
            </Grid>
        </Grid>
    </>
}
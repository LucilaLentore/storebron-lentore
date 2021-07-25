import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemStyles } from './ItemStyles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => itemStyles(theme));

export const Item = props => {
    const classes = useStyle();
    const { producto } = props;

    return<>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image= {producto.data.picture.pictureUrl}
                    width="200"
                    title= {producto.data.picture.alt}
                />
                <CardContent>
                    <Typography  component="h2" className={classes.titulo}>
                        <Link className={classes.titleLink} to={`/product/${producto.id}`}>
                        {producto.data.title}
                        </Link>
                    </Typography>
                    <Typography  color="textSecondary" component="p">{producto.data.description}</Typography>
                    <Typography  className={classes.precio}>${producto.data.price}</Typography>
                    <Typography  variant="h6" component="p">ID: {producto.id}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}
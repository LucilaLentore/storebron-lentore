import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { itemStyles } from './ItemStyles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Counter } from '../Counter/Counter.js'

const useStyle = makeStyles((theme) => itemStyles(theme));

export const Item = props => {
    const classes = useStyle();

    const {id, title, description, price, pictureUrl, alt, stock} = props;
    return<>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image= {pictureUrl}
                    width="200"
                    title= {alt}
                />
                <CardContent>
                    <Typography  component="h2" className={classes.titulo}>{title}</Typography>
                    <Typography  color="textSecondary" component="p">{description}</Typography>
                    <Typography  className={classes.precio}>${price}</Typography>
                    <Typography  variant="h6" component="p">ID: {id}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <Counter stock={stock} valorInicial={1}/>
            </CardActions>
        </Card>
    </>
}
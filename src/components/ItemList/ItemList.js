import React from 'react';
import { Item } from '../Item/Item.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { itemListStyles } from './ItemListStyles'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyle = makeStyles((theme) => itemListStyles(theme));

export const ItemList = props => {
    const classes = useStyle();
    const { productos } = props;

    return<>
        {
            productos.length === 0 ? (<div className={classes.root}><LinearProgress/></div>) : (<Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center" >
                        {productos.map((producto) => <Item
                        key={producto.id}
                        producto={producto}
                        />)
                        }
                    </Grid>
                </Grid>
            </Grid>)
        }
    </>
}
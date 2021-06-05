import React from 'react';
import { Typography } from '@material-ui/core'
export const ItemListContainer = props =>{
    const {userName} = props;
    return<>
        <Typography variant='h2' align='center'>¡Nos vemos pronto, {userName}!</Typography>
    </>
}
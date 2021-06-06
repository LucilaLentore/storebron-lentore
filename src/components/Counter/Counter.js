import React, { useState } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { counterStyles } from './CounterStyles'
import { PlusOne } from '@material-ui/icons';
import moment from 'moment';

const useStyle = makeStyles((theme) => counterStyles(theme));

export const Counter = () => {
    const classes = useStyle()
    const [count, setCount] = useState(0);
    const [dateAndHour, setDateAndHour] = useState(undefined);
    const handleChange = () => {
        setCount(count+1);
        setDateAndHour(moment().format('DD-MM-YYYY HH:mm:ss')); 
    }
    return<div className={classes.container}> 
        <div>
        <Typography variant="h4">Hiciste click {count} {count === 1 ? 'vez' : 'veces'}</Typography>
        {dateAndHour && <Typography variant='h5'>{dateAndHour}</Typography>}
        <IconButton onClick={e => handleChange()} color="secondary">
            <PlusOne/>
        </IconButton>
        </div>
    </div>
}
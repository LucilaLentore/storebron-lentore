import React from 'react';
import { Typography } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

export const Error = () => {
    return <section style={{display: 'flex', justifyContent:'center'}}>
        <Typography variant="h2">
            Error 404.
            <SentimentVeryDissatisfiedIcon fontSize='large'/>
        </Typography>
    </section> 
}
import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    root:{
        display: 'flex'
    },
    appBar: {
        backgroundColor: '#f5ab00',

    },
    toolBar:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20 
    },
    title:{
        flexGrow: 1,
        fontFamily: 'Rubik',   
        fontWeight: 400 
    },
    buttons:{
        color: '#5c4000',
        fontSize: '1rem',
        fontWeight: 400,
        fontFamily: 'Rubik',
        '&:hover':{
            color: '#ffffff',
            backgroundColor: 'transparent'
        }
    },
}))

export const NavBar = props => {
    const classes = useStyle()
    return <>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Typography variant='h3' className={classes.title}>
                    StoreBron
                </Typography>
                    <Button variant='h4' className={classes.buttons}>Zapatillas</Button>
                    <Button variant='h4' className={classes.buttons}>Pelotas</Button>
                    <Button variant='h4' className={classes.buttons}>Aros</Button>
            </Toolbar>
        </AppBar>
    </>
}
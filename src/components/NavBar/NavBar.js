import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { navBarStyles } from './NavBarStyles'

const useStyle = makeStyles((theme) => navBarStyles(theme));

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
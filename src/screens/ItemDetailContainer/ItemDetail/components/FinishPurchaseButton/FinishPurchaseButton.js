import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { finishPurchaseButtonStyles } from './FinishPurchaseButtonStyles';

const useStyle = makeStyles((theme) => finishPurchaseButtonStyles(theme));
export const FinishPurchaseButton = props =>{
    const classes = useStyle();
    const {clickCancelar} = props;
    const history = useHistory();
    return<div className={classes.generalContainer}>
        <div className={classes.container}>
            <Link className={classes.buttons} onClick={() => history.push(`/cart`)}>Terminar compra</Link>
            <Link className={classes.buttons} onClick={() => clickCancelar(false)}>Cancelar</Link>
        </div>
    </div>
}
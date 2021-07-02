import React, { useContext } from 'react';
import { Badge, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../../../../Context/CartContext';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      backgroundColor: '#ffffff',
      color: '#5c4000'
    },
  }))(Badge);

export const CartWidget = props => {
    const {itemsQuantity} = useContext(CartContext)
    return <>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={itemsQuantity}>
                <ShoppingCartIcon/>
            </StyledBadge>
        </IconButton>
    </>
}
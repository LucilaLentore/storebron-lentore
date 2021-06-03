import React from 'react';
import { Badge, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      backgroundColor: '#ffffff',
      color: '#5c4000'
    },
  }))(Badge);

export const CartWidget = props => {
    return <>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={5}>
                <ShoppingCartIcon/>
            </StyledBadge>
        </IconButton>
    </>
}
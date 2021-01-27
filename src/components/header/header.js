import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function Header(props) {

  return (
    <Container>
      <Typography variant="h6">
        StoreName
    </Typography>
      <Button><ShoppingCartIcon></ShoppingCartIcon></Button>
    </Container>

  )
}

export default Header;
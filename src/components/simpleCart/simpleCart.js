import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { useEffect } from 'react';

const SimpleCart = (props) => {
  console.log(props)

  const handler = () => {

  }
  useEffect(() => {
    //i want 
  })
  return (
    <List>
      {props.cart.map(((product, idx) => {
        console.log(product);
        return (
          <Container key={idx}>
            <ListItem >
              <Typography>{product.name}</Typography>
              <Button>Remove</Button>
            </ListItem>
          </Container>
        )
      }))}
    </List>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categorySwitchboard.categories,
    products: state.categorySwitchboard.products,
    activeCategory: state.categorySwitchboard.activeCategory,
    cart: state.categorySwitchboard.cart,
  }
}

export default connect(mapStateToProps)(SimpleCart);
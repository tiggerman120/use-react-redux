import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { removeFromCart, emptyCart } from '../../store/actions'
const mapDispatchToProps = { removeFromCart, emptyCart }

const SimpleCart = (props) => {
  console.log(props)
//const [cartItem, setCartItem] = useState([]);
  const handler = (product) => {
    props.removeFromCart(product)
    product.inStock++//this is a state mutation and should have an action+reducer to only update this property and then call it here
  }

  const resetHandler = () => {
    console.log(props)
    props.emptyCart()
  }
  // useEffect(() => {
  //   console.log(props)
  //   //props.cart.forEach((item, idx) => {
  //     // if(item.name === props.cart[idx]) {
  //     //   props.
  //     // }
  //   })
  //   //i want to update state using a foreach on the state array and update state with an if the payload strictly equals the product name in the array at index
  // }, [props.products, props.cart])
  return (
    <List>
      {props.cart ? (
        props.cart.map(((product, idx) => {
          console.log(props.cart)
          return (
            <Container key={idx}>
              <ListItem >
                <Typography>{product.name}</Typography>
                <Button onClick={() => {
                  handler(product)
                }}>Remove</Button>
              </ListItem>
            </Container>
          )
        }))
      )
    :
    null
    }
      {}
    <Button onClick={() => {resetHandler()}}>empty cart</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
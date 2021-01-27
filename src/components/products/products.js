import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import categorySwitchboard, { showCategory, saveProducts, addToCart } from '../../store/categories';




const mapDispatchToProps = { addToCart, saveProducts };

console.log();



const Products = (props) => {
  
    const clickHandler = (product) => {
      console.log(props, product);
      props.addToCart(product)
    }
  console.log(props);
  const [production, setProducts] = useState([])
  useEffect(() => {
    const filterer = () => {
      setProducts(props.products.filter(product =>
        product.category === props.category
      ))
    }
    filterer()
  }, [props.category, props.products])

  if (!props.products) {
    return <Typography>Select a category</Typography>
  }

  return (
    <Container className={'class'}>
      <Container>
        {production.map(((product, idx) => {
          console.log(product);
          return (
            <Card key={idx}>
              {product.name}
              <Button onClick={() =>
                clickHandler()
              }>add to cart!</Button>
            </Card>
          )
        }))}
      </Container>


    </Container>
  )

}

const mapStateToProps = state => ({

  products: state.categorySwitchboard.products,
  category: state.categorySwitchboard.activeCategory,
  inStock: state.categorySwitchboard.cart,


})

export default connect(mapStateToProps, mapDispatchToProps)(Products);

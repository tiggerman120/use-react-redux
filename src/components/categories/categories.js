import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Products from '../products/products'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import categorySwitchboard, { showCategory, saveProducts } from '../../store/categories'
import { render } from 'react-dom';
import products from '../products/products';
//import Products from '../products/products'

const mapDispatchToProps = { showCategory, saveProducts };

const Categories = (props) => {
  console.log(props)
  let clickHandler = (category) => {
    console.log('hitting the click event')
    props.saveProducts(category);

  }
  // useEffect(() => {
  //   showCategory()
  // }, [props])
  return (

    <Container className={'class'}>

      {props.categories.map((category, idx) => (

        <Container key={idx}>

          <Button onClick={() => {
            clickHandler(category)
            console.log(category)

          }}>Name: {category.name}</Button>
        </Container>
      ))
      }

    </Container >
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categorySwitchboard.categories,
    products: state.categorySwitchboard.products,
    activeCategory: state.categorySwitchboard.activeCategory,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);






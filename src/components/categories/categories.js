import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
import categorySwitchboard, { showCategory, displayProducts} from '../../store/categories'
//import Products from '../products/products'

const mapDispatchToProps = { showCategory, displayProducts };

function clickHandler() {
  console.log('hitting the click event', )
  return(
    <div>
    {/* <Products /> */}
    </div>
  )
}
const Categories = (props) => {
  console.log(props)

  useEffect(() => {
    showCategory()
  }, [props])
  return (
    <div className={'class'}>
      {props.categories.map((category, idx) => (
        <div key={idx}>
          <button onClick={() => {
            return (
              <div>
                {props.products.map((product, idx) => (
                  <div key={idx}></div>
                ))}
              </div>
            )
          }}>Name: {category.name}</button>
        </div>
      ))}
     
    </div>
  )
}

const mapStateToProps = state => ({
  
  categories: state.categorySwitchboard.categories,
  products: state.categorySwitchboard.products,
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);






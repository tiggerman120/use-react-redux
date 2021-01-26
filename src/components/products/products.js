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
import categorySwitchboard, { showCategory, displayProducts } from '../../store/categories'

const mapDispatchToProps = { showCategory, displayProducts };

// const Products = (props) => {
//   console.log(props);

//   useEffect() {

//   }
//   return (
//     <div className={'class'}>
//       {props.products.map((product, idx) => (
//         <div key={idx}>
//           <ul>{product.name}</ul>
//         </div>
//       ))}

//     </div>
//   )

// }

const mapStateToProps = state => ({
  
  products: state.categorySwitchboard.products,
  
})

//export default (Products);

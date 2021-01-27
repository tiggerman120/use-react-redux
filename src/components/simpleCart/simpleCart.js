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
    
  })
  return(
    <List>
      <ListItem>
    <Typography>proof of life</Typography>
      </ListItem>
    </List>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categorySwitchboard.categories,
    products: state.categorySwitchboard.products,
    activeCategory: state.categorySwitchboard.activeCategory,
  }
}

export default connect(mapStateToProps)(SimpleCart);
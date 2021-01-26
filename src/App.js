import VotesCounter from './components/votes-counter';
import Categories from './components/categories/categories'
//import Products from './components/products/products'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Header from './components/header/header';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Header />
      </Toolbar>
        <Categories />
        {/* <Products /> */}
      <Footer />
    </div>
  );
}

export default App;
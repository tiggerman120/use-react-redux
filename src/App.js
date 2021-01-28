import VotesCounter from './components/votes-counter';
import Categories from './components/categories/categories';
import SimpleCart from './components/simpleCart/simpleCart';
import Products from './components/products/products'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
 
  return (
    <div className="App">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Header />
      </Toolbar>
      <Container>
        <Categories />
      </Container>
      <Container>
        <Products />
      </Container>
      <Router>
        <Link to="/cart">Cart
          <SimpleCart />
        </Link>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
import { showCategory, saveProducts, } from './simpleCart'
var uuid = require('uuid-v4');
let initialState = { 
  results: [],
  categories: [],
 }
// let initialState = {
//   categories: [
//     { name: 'electronics', displayName: 'Electronics' },
//     { name: 'food', displayName: 'Food' },
//     { name: 'clothing', displayName: 'Clothing' },
//   ],
//   products: [
//     { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//     { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//     { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//     { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//     { name: 'Apples', category: 'food', price: .99, inStock: 500 },
//     { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//     { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//   ],
//   activeCategory: '',
//   cart: [],

// // };

function cartAddFilter() {

}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log(action)
  if (!action.payload) {
    console.log(state, action);
  } else {
    console.log(state)
  }
  switch (type) {
    case 'CATEGORIES':

      return initialState;

    case 'SAVE':

      return {
        ...state,
        activeCategory: payload,

      };

    case 'ADDTOCART':
      console.log(payload)
      console.log(state.cart)
      payload = { ...payload, id: uuid() }
      return {
        ...state,
        cart: [...state.cart, payload]


      };

    case 'REMOVEFROMCART':
      let newCart = state.cart.filter(cartItem =>
        (cartItem.id !== payload.id)
      )
      return {
        ...state,
        cart: newCart,

      };

    case 'DECREASESTOCK':

      return {
        ...state,
        inStock: payload
      }

    case 'RESET':
      return initialState;

    case 'GET':
      
      
      return {
        categories: payload
        }
    default:

      return state;
  }
}

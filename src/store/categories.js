let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: '',
  cart: [],
};

export const showCategory = () => {
  return {
    type: 'CATEGORIES',
  }
}

export const saveProducts = (category) => {
  console.log('name of category', category)
  return {
    type: 'SAVE',
    payload: category.name,
  }
}

export const addToCart = (product) => {
  console.log(product);
  return {
    type: 'ADDTOCART',
    payload: product.name
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVEFROMCART',
    payload: product.name
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log(action)
  if (!action.payload) {
    console.log(state, action);
  } else {
    console.log(action)
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

      return {
        ...state,
        cart: payload
      };

    case 'REMOVEFROMCART':

      return {
        ...state,
        cart: payload,

      };


    case 'DISPLAY':
      return initialState;


    default:

      return state;
  }
}

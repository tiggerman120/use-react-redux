let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
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
  activeCategory: ''
};

export const showCategory = () => {
  return {
    type: 'CATEGORIES',
  }
}

export const displayProducts = (category) => {
  return {
    type: 'DISPLAY',
    payload: category,
  }
}

let categorySwitchboard = (state = initialState, action) => {
  console.log(state);
  let { type } = action;
  switch (type) {
    case 'CATEGORIES':

      return initialState;

    case 'DISPLAY':
      return initialState;


    default:
      return state;
  }
}
export default categorySwitchboard;
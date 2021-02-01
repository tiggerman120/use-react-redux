
let axios = require('axios');
let superagent = require('superagent');
let api = 'https://simonpanek-auth-api.herokuapp.com/api/v1/store'

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
    payload: product,
  }
}

export const removeFromCart = (product) => {
  console.log(product)
  return {
    type: 'REMOVEFROMCART',
    payload: product,
  }
}

export const decreaseInStockAmount = (product) => {
  console.log(product)
  return {
    type: 'DECREASESTOCK',
    payload: product.inStock,
  }
}

export const emptyCart = (product) => {
  console.log(product)
  return {
    type: 'RESET',

  }
}

export const getRemoteCategories = () => dispatch => {
  return superagent.get('https://simonpanek-auth-api.herokuapp.com/api/v1/store')
    .then(response => {
      dispatch(getAction({ products: response.body }));
    });
};

export const getRemoteProducts = () => dispatch => {
  return axios.get(`${api}`)
    .then(response => {
      dispatch(getAction(response.body));
    });
};

export const putRemoteData = (id, data) => async dispatch => {
  let url = `${api}/${id}`
  let response = await axios.put(url).send(data);
  console.log(response.body);
  // dispatch(getAction(record));
};

export const deleteData = (id) => dispatch => {
  return axios.delete(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      dispatch(deleteAction(response.body))
    })
}

export const deleteAction = payload => {
  return{
    type: 'DELETE',
    payload: payload
  }
}

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};
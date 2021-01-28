
let axios = require('axios');
let superagent = require('superagent');
let api = 'https://garrett-basic-api-server-main.herokuapp.com/'

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

export const getRemoteCategories = () => async dispatch => {
  const getter = superagent.get(`${api}food`)
  console.log(getter.body);
  dispatch(getAction(getter.body));

    // .then(response => {
    //   console.log(response)

    //   // .then(res=>res.json())
    //   //       .then(json=>console.log(json))
    // });
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
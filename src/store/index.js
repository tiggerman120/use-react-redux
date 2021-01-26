import {createStore, combineReducers } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';

import counter from './votes';
import categorySwitchboard from './categories';

let reducers = combineReducers({ counter, categorySwitchboard });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();

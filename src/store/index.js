import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from '../middleware/thunk.js';
import counter from './votes';
import categorySwitchboard from './reducers';

let reducers = combineReducers({ counter, categorySwitchboard });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();

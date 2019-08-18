import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

const middlewares = [];

const initialState = {};

const enhancers = [
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const store = createStore(reducers, initialState, compose(...enhancers));

export default store;

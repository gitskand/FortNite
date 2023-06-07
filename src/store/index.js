// src/store/index.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './reducers/categoriesReducer';
import formsReducer from './reducers/formsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  forms: formsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

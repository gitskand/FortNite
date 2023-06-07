// src/store/reducers/categoriesReducer.js

import { CREATE_CATEGORY } from '../actions/types';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;

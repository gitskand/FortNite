import { CREATE_FORM, UPDATE_FORM_CATEGORY, UPDATE_FORM } from '../actions/types';


const initialState = [];

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      return [...state, action.payload];
    case UPDATE_FORM:
      return state.map((form) =>
        form.id === action.payload.id ? action.payload : form
      );
    case UPDATE_FORM_CATEGORY:
      return state.map((form) =>
        form.id === action.payload.formId
          ? { ...form, categoryId: action.payload.categoryId }
          : form
      );
    default:
      return state;
  }
};

export default formsReducer;

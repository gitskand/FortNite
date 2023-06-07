// ./store/actions/categoriesActions.js

import { CREATE_CATEGORY, CREATE_FORM, UPDATE_FORM_CATEGORY,  UPDATE_FORM } from './types';

export const createCategory = (category) => {
  return {
    type: CREATE_CATEGORY,
    payload: category,
  };
};

export const createForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: form,
  };
};

export const updateFormCategory = (formId, categoryId) => {
  return {
    type: UPDATE_FORM_CATEGORY,
    payload: {
      formId,
      categoryId,
    },
  };
};

export const updateForm = (form) => {
    return {
      type: UPDATE_FORM,
      payload: form,
    };
}

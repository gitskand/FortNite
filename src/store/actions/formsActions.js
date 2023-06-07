import { CREATE_FORM, UPDATE_FORM_CATEGORY, UPDATE_FORM} from './types';

export const createForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: form,
  };
};

export const updateFormCategory = (formId, categoryId) => {
  return {
    type: UPDATE_FORM_CATEGORY,
    payload: { formId, categoryId },
  };
};

export const updateForm = (form) => {
  return {
    type: UPDATE_FORM,
    payload: form,
  };
};

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { createForm } from '../store/actions/formsActions';

const generateUniqueId = () => {
  // Implementation for generating a unique ID
};

const FormForm = ({ form, categories }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const newForm = { ...values, id: generateUniqueId() };
    await dispatch(createForm(newForm));
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    uid: '',
    phoneNumber: '',
    description: '',
    categoryId: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    uid: Yup.string().required('UID is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    description: Yup.string(),
    categoryId: Yup.string().required('Category is required'),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Create Form</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="uid">UID:</label>
                    <Field type="text" id="uid" name="uid" className="form-control" />
                    <ErrorMessage name="uid" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                    <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <Field type="text" id="description" name="description" className="form-control" />
                    <ErrorMessage name="description" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categoryId">Category:</label>
                    <Field as="select" id="categoryId" name="categoryId" className="form-control">
                      <option value="">Select a category</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="categoryId" component="div" className="error-message" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary my-2">Create</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormForm;


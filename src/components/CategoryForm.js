import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CategoryForm = ({ createCategory }) => {
  const initialValues = {
    icon: '',
    name: '',
    description: '',
  };

  const validationSchema = Yup.object().shape({
    icon: Yup.string().required('Icon is required'),
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    createCategory(values);
    resetForm();
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Create Category</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="icon">Icon:</label>
                    <Field type="text" id="icon" name="icon" className="form-control" />
                    <ErrorMessage name="icon" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" id="name" name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <Field type="text" id="description" name="description" className="form-control" />
                    <ErrorMessage name="description" component="div" className="error-message" />
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

export default CategoryForm;


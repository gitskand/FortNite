import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { updateForm } from '../store/actions/formsActions'
const FormList = ({darkMode}) => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch(); // Initialize the 'dispatch' function

  const forms = useSelector((state) => {
    let filteredForms = state.forms;

    if (selectedCategoryId) {
      filteredForms = filteredForms.filter((form) => form.categoryId === selectedCategoryId);
    }


    filteredForms.sort((a, b) => a.name.localeCompare(b.name));

    return filteredForms;
  });

  const categories = useSelector((state) => state.categories);

  const handleEditForm = (form) => {
    setSelectedForm(form);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedForm(null);
    setShowModal(false);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  const handleSaveChanges = () => {
    if (selectedForm) {
      dispatch(updateForm(selectedForm));
      handleCloseModal();
    }
  };



  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Forms</h2>
              <div className="form-group">
                <label htmlFor="categoryFilter">Filter by Category:</label>
                <select
                  id="categoryFilter"
                  value={selectedCategoryId}
                  onChange={handleCategoryChange}
                  className="form-control"
                >
                  <option value="">All</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <ul className="list-group">
                {forms.map((form) => (
                  <li key={form.id} className="list-group-item">
                    <div>
                      <strong>Name:</strong> {form.name}
                    </div>
                    <div>
                      <strong>Email:</strong> {form.email}
                    </div>
                    <div>
                      <strong>UID:</strong> {form.uid}
                    </div>
                    <div>
                      <strong>Phone Number:</strong> {form.phoneNumber}
                    </div>
                    <div>
                      <strong>Description:</strong> {form.description}
                    </div>
                    <div>
                      <strong>Category:</strong>{' '}
                      {categories.find((category) => category.id === form.categoryId)?.name}
                    </div>
                    <div>
                      <Button className='my-3' onClick={() => handleEditForm(form)}>Edit</Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={selectedForm?.name || ''}
                onChange={(e) => setSelectedForm({ ...selectedForm, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={selectedForm?.email || ''}
                onChange={(e) => setSelectedForm({ ...selectedForm, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="uid">UID:</label>
              <input
                type="text"
                id="uid"
                className="form-control"
                value={selectedForm?.uid || ''}
                onChange={(e) => setSelectedForm({ ...selectedForm, uid: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                value={selectedForm?.phoneNumber || ''}
                onChange={(e) => setSelectedForm({ ...selectedForm, phoneNumber: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className="form-control"
                value={selectedForm?.description || ''}
                onChange={(e) => setSelectedForm({ ...selectedForm, description: e.target.value })}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                className="form-control"
                value={selectedForm?.categoryId || ''}
                onChange={(e) => setSelectedForm({ ...selectedForm, categoryId: e.target.value })}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormList;


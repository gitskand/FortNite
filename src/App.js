import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CategoryForm from './components/CategoryForm';
import FormForm from './components/FormForm';
import FormList from './components/FormList';
import { createCategory, createForm } from './store/actions/categoriesActions';
import Navbar from './components/Navbar';
import './App.css';


const App = () => {
  const [mode, setMode] = useState('light');
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCreateCategory = (category) => {
    dispatch(createCategory(category));
  };

  const handleCreateForm = (form) => {
    dispatch(createForm(form));
  };

  const Toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className={mode === 'dark' ? 'dark-mode' : ''}>
      <Navbar title="FormCrud" mode={mode} Toggle={Toggle} />
      <CategoryForm createCategory={handleCreateCategory} />
      <FormForm categories={categories} createForm={handleCreateForm} />
      <FormList />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory2 = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 2) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={inputChange} />
    </form>
  );
};

AddCategory2.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};

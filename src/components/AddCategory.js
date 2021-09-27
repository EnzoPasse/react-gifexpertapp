import React, { useState } from "react";
import PropTypes from 'prop-types'


const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState(''); // no puede ser undefined!.... por que se usa el valor en el HTML

  const handleInputChange = (e) => {
    setInputValue(e);
  };

  const handleSubmit = (e) => {
    console.log('submit Done');
    e.preventDefault(); // previene el refresh del navegador por defecto
    if(inputValue.trim().length > 2){
      setCategories(cat => [inputValue, ...cat,]);
      setInputValue('');
    }

  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </form>
  );
};

AddCategory.propTypes ={
  setCategories : PropTypes.func.isRequired
}




export default AddCategory;

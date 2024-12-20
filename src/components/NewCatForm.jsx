import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCatForm = ({ handleSubmit }) => {
  const kDefaultFormState = {
    name: '',
    personality: '',
    color: '',
    pet_count: 0,
  };

  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = {...formData, [fieldName] : fieldValue};
    setFormData(newFormData);
  };


  const onHandleSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData(kDefaultFormState);
  };


  return (
    <form onSubmit={onHandleSubmit}>
      <div>
        <label htmlFor="name">Cat Name: </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="personality">Cat personality: </label>
        <input type="text" id="personality" name="personality" value={formData.personality} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="color">Cat color: </label>
        <input type="text" id="color" name="color" value={formData.color} onChange={handleChange}/>
      </div>
      <input type="submit" value="Add a cat" />
    </form>
  );
};

NewCatForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default NewCatForm;
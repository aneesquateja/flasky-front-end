import { useState } from 'react';

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
        <label htmlFor="personality">Cat Personality: </label>
        <input type="text" id="personality" name="personality" value={formData.personality} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="color">Cat Color: </label>
        <input type="text" id="color" name="color" value={formData.color} onChange={handleChange}/>
      </div>
      <div>
        <input type="submit" value="Add a cat" />
      </div>
    </form>
  );
};

export default NewCatForm;
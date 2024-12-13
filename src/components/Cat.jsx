import PropTypes from 'prop-types';
// import { useState } from 'react';



const Cat = ({
  id,
  name,
  color,
  personality,
  caretaker,
  petCount,
  onPetCat,
  onUnregisterCat,
}) => {
  // move this up to the main cat data
  // const [petCount, setPetCount] = useState(0);

  const onPetClick = () => {
    onPetCat(id);
    // setPetCount(petCount + 1);
    // setPetCount(petCount => petCount + 1)
  };
  const onUnregisterClick = () => {
    onUnregisterCat(id);
  };


  return (
    <li>
      <h3>Name: {name}</h3>
      <h3>Color: {color}</h3>
      <h3>Personality: {personality}</h3>
      <h3>Caretaker: {caretaker}</h3>
      <h3># of Pets: {petCount}</h3>
      <p>🐈</p>
      <button onClick={onPetClick}>Pet Cat</button>
      <button onClick={onUnregisterClick}>Unregister Cat</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  onPetCat: PropTypes.func.isRequired,
  onUnregisterCat: PropTypes.func.isRequired,
};

export default Cat;

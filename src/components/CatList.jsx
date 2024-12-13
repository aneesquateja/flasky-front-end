// import { i } from 'vitest/dist/reporters-1evA5lom.js';
import Cat from './Cat';
import PropTypes from 'prop-types';


const CatList = ({ catData, onPetCat, onUnregisterCat }) => {
    const catComponents = catData.map((cat) => {
      return (
        <Cat
          id={cat.id}
          name={cat.name}
          personality={cat.personality}
          color={cat.color}
          caretaker={cat.caretaker}
          petCount={cat.petCount}
          onPetCat={onPetCat}
          onUnregisterCat={onUnregisterCat}
          key={cat.id}
        />);
    });

    return (
    <>
    <h2> Cat List </h2>
    <ul>
      {catComponents}
    </ul>
  </>
);
};

CatList.propTypes = {
    catData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    petCount: PropTypes.number.isRequired,
})).isRequired,
onPetCat: PropTypes.func.isRequired,
onUnregisterCat: PropTypes.func.isRequired,
};

export default CatList;
            
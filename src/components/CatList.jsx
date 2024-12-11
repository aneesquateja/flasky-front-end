// import { i } from 'vitest/dist/reporters-1evA5lom.js';
import Cat from './Cat';
import PropTypes from 'prop-types';


const CatList = ({ catData }) => {
    const catComponents = catData.map((cat,i) => {
       return(
            <Cat 
            name={cat.name}
            personality={cat.personality}
            color={cat.color}
            caretaker={cat.caretaker}
            key={i}
            /> );
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
        name: PropTypes.string.isRequired,
        caretaker: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        personality: PropTypes.string.isRequired
    })).isRequired
};

export default CatList;
            
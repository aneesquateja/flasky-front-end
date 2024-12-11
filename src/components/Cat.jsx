import PropTypes from 'prop-types';



const Cat = ({ name, color, personality, caretaker }) => {
    return(
        <li>
            <h3>Name: {name}</h3>
            <h3>Color: {color}</h3>
            <h3>Personality: {personality}</h3>
            <h3>Caretaker: {caretaker}</h3>
            <p>🐈</p>
            <button>Pet Cat</button>
        </li>
    );
};

Cat.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired
};

export default Cat;

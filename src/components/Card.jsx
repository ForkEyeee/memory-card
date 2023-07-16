import PropTypes from "prop-types";

function Card({ card, determineWin }) {
  return (
    <img
      src={card.photoDir}
      alt={card.name}
      className="cursor-pointer rounded-lg border-2 border-blue-500  shadow-md transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-100"
      onClick={() => determineWin(card.id)}
    />
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  determineWin: PropTypes.func.isRequired,
};

export default Card;

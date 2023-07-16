import PropTypes from "prop-types";

function Card({ card, determineWin }) {
  return (
    <div className="rounded-2xl border-4 border-pink-500 bg-white shadow-md transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-100">
      <img
        src={card.photoDir}
        alt={card.name}
        className="border-3 h-full w-full cursor-pointer object-cover"
        onClick={() => determineWin(card.id)}
      />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  determineWin: PropTypes.func.isRequired,
};

export default Card;

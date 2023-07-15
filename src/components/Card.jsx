import PropTypes from "prop-types";

function Card({ card, clickedCards, onCardClick, setScore, setLose }) {
  function determineWin() {
    if (clickedCards.includes(card.id)) {
      setLose(true);
      return;
    }
    onCardClick(current => [...current, card.id]);
    setScore(score => score + 1);
  }

  return (
    <img
      src={card.photoDir}
      alt={card.name}
      className="cursor-pointer rounded-lg border-2 border-blue-500 shadow-md transition-transform duration-500 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-100"
      onClick={determineWin}
    />
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  clickedCards: PropTypes.array,
  onCardClick: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  setLose: PropTypes.func.isRequired,
};

export default Card;

import PropTypes from "prop-types";

function Card({ card, clickedCards, onCardClick, setScore, setGameOver }) {
  function determineWin() {
    if (clickedCards.includes(card.id)) {
      setGameOver(true);
      return;
    }
    onCardClick(current => [...current, card.id]);
    setScore(score => score + 1);
  }

  return (
    <div>
      <img
        src={card.photoDir}
        alt={card.name}
        className="border border-solid border-black "
        onClick={determineWin}
      />
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  clickedCards: PropTypes.array,
  onCardClick: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
};

export default Card;

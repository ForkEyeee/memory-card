import PropTypes from "prop-types";

function Card({
  card,
  clickedCards,
  onCardClick,
  setScore,
  setGameOver,
  score,
}) {
  function determineWin() {
    if (clickedCards.includes(card.id)) {
      setGameOver(true);
      onCardClick(null);
      setScore(0);
      setGameOver(false);
      onCardClick([]);
      return;
    }
    onCardClick(current => [...current, card.id]);
    setScore(score => score + 1);
    // card.isClicked = true;
    // console.log(card);
    console.log("clicked");
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
  clickedCard: PropTypes.number,
  onCardClick: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Card;

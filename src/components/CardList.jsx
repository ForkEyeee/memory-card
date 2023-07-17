import Card from "./Card";
import PropTypes from "prop-types";

function CardList({ determineWin, shuffledCards }) {
  return (
    <>
      <ul className="grid	grid-cols-4 grid-rows-4 gap-y-20 pt-20 md:grid-cols-4">
        {shuffledCards.map(card => (
          <li key={card.id} className="flex justify-center">
            <Card card={card} determineWin={determineWin} />
          </li>
        ))}
      </ul>
    </>
  );
}

CardList.propTypes = {
  determineWin: PropTypes.func.isRequired,
  shuffledCards: PropTypes.func.isRequired,
};

export default CardList;

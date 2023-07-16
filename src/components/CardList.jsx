import Card from "./Card";
import PropTypes from "prop-types";
import cardData from "./CardData";

function shuffleCards(cardData) {
  return [...cardData].sort(() => Math.random() - 0.5);
}

function CardList({ determineWin }) {
  const cards = shuffleCards(cardData);

  return (
    <>
      <ul className="grid	grid-cols-4 grid-rows-4 gap-y-20 pt-20 md:grid-cols-4">
        {cards.map(card => (
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
};

export default CardList;

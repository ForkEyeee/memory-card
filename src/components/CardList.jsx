import Card from "./Card";
import PropTypes from "prop-types";
import cardData from "./cardData";
import { useEffect } from "react";

function CardList({
  onCardClick,
  setLose,
  clickedCards,
  setScore,
  win,
  setWin,
}) {
  function shuffleCards(cardData) {
    return [...cardData].sort(() => Math.random() - 0.5);
  }

  const cards = shuffleCards(cardData);

  useEffect(() => {
    if (clickedCards.length === cardData.length) {
      setWin(true);
    }

    return () => {};
  }, [clickedCards, setWin]);

  return (
    <>
      <ul className="grid	grid-cols-4 grid-rows-4 gap-y-20 md:grid-cols-4 ">
        {cards.map(card => (
          <li key={card.id} className="flex justify-center">
            <Card
              card={card}
              clickedCards={clickedCards}
              onCardClick={onCardClick}
              setScore={setScore}
              setLose={setLose}
              win={win}
              setWin={setWin}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

CardList.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  setLose: PropTypes.func.isRequired,
  clickedCards: PropTypes.array,
  setScore: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
  setWin: PropTypes.func.isRequired,
};

export default CardList;

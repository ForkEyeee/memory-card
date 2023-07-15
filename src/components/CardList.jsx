import Card from "./Card";
import PropTypes from "prop-types";
import Score from "./Score";
import cardData from "./cardData";
import { useEffect } from "react";

function CardList({
  onCardClick,
  setLose,
  clickedCards,
  score,
  setScore,
  highscore,
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
      <Score position={"right"} color={"text-purple-600"}>
        HighScore: {highscore.current}
      </Score>

      <Score position={"left"} color={"text-blue-800"}>
        Score: {score}
      </Score>

      <ul className="grid auto-rows-min	grid-cols-8 gap-y-20  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
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
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  highscore: PropTypes.object.isRequired,
  win: PropTypes.bool.isRequired,
  setWin: PropTypes.func.isRequired,
};

export default CardList;

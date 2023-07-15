import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

const cardData = [
  {
    id: 1,
    name: "Angry Face",
    photoDir: "../src/assets/images/angry-face.png",
    isClicked: false,
  },
  {
    id: 2,
    name: "Astonished Face",
    photoDir: "../src/assets/images/astonished-face.png",
    isClicked: false,
  },
  {
    id: 3,
    name: "Beaming Face With Smiling Eyes",
    photoDir: "../src/assets/images/beaming-face-with-smiling-eyes.png",
    isClicked: false,
  },
  {
    id: 4,
    name: "Face With Symbols On Mouth",
    photoDir: "../src/assets/images/face-with-symbols-on-mouth.png",
    isClicked: false,
  },
  {
    id: 5,
    name: "Face With Tears Of Joy",
    photoDir: "../src/assets/images/face-with-tears-of-joy.png",
    isClicked: false,
  },
  {
    id: 6,
    name: "Ghost",
    photoDir: "../src/assets/images/ghost.png",
    isClicked: false,
  },
  {
    id: 7,
    name: "Goblin",
    photoDir: "../src/assets/images/goblin.png",
    isClicked: false,
  },
  {
    id: 8,
    name: "Loudly Crying Face",
    photoDir: "../src/assets/images/loudly-crying-face.png",
    isClicked: false,
  },
  {
    id: 9,
    name: "Zany Face",
    photoDir: "../src/assets/images/zany-face.png",
    isClicked: false,
  },
  {
    id: 10,
    name: "Upside-Down Face",
    photoDir: "../src/assets/images/upside-down-face.png",
    isClicked: false,
  },
  {
    id: 11,
    name: "Squinting Face With Tongue",
    photoDir: "../src/assets/images/squinting-face-with-tongue.png",
    isClicked: false,
  },
  {
    id: 12,
    name: "Pile of Poo",
    photoDir: "../src/assets/images/pile-of-poo.png",
    isClicked: false,
  },
  {
    id: 13,
    name: "Drooling Face",
    photoDir: "../src/assets/images/drooling-face.png",
    isClicked: false,
  },
  {
    id: 14,
    name: "Nauseated Face",
    photoDir: "../src/assets/images/nauseated-face.png",
    isClicked: false,
  },
];

function CardList({
  onCardClick,
  setGameOver,
  clickedCards,
  score,
  setScore,
  highscore,
}) {
  const cards = shuffle(cardData);
  console.log("rendering cardlist");
  // useEffect(() => {
  //   if (clickedCard !== null) {
  //     // foundDrink.isClicked = true;
  //     setScore(score => score + 1);
  //   }
  //   console.log("cardlist rendered");
  //   // if (highScoreRef.current < score) {
  //   //   highScoreRef.current = score;
  //   // }
  //   // Optional: Cleanup function (similar to componentWillUnmount in classes)
  //   return () => {};
  // }, [clickedCard, score]);
  // console.log(cards);
  return (
    <>
      <p>HighScore: {highscore.current}</p>
      <p>CurrentScore:{score}</p>

      <ul className="grid auto-rows-min	 grid-cols-3 gap-20 gap-y-12 p-5 pl-20 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        {cards.map(card => (
          <li key={card.id}>
            <Card
              // imgLocation={card.photoDir}
              // imgName={card.name}
              // imgId={card.id}
              card={card}
              clickedCards={clickedCards}
              onCardClick={onCardClick}
              setScore={setScore}
              setGameOver={setGameOver}
              score={score}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

CardList.propTypes = {
  setGameOver: PropTypes.func.isRequired,
  clickedCard: PropTypes.object,
  onCardClick: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default CardList;

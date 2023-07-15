import Card from "./Card";
import PropTypes from "prop-types";
import Score from "./Score";

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

const cardData = [
  {
    id: 1,
    name: "Angry Face",
    photoDir: "../src/assets/cards/angry-face.png",
  },
  {
    id: 2,
    name: "Astonished Face",
    photoDir: "../src/assets/cards/astonished-face.png",
  },
  {
    id: 3,
    name: "Beaming Face With Smiling Eyes",
    photoDir: "../src/assets/cards/beaming-face-with-smiling-eyes.png",
  },
  {
    id: 4,
    name: "Face With Symbols On Mouth",
    photoDir: "../src/assets/cards/face-with-symbols-on-mouth.png",
  },
  {
    id: 5,
    name: "Face With Tears Of Joy",
    photoDir: "../src/assets/cards/face-with-tears-of-joy.png",
  },
  {
    id: 6,
    name: "Ghost",
    photoDir: "../src/assets/cards/ghost.png",
  },
  {
    id: 7,
    name: "Goblin",
    photoDir: "../src/assets/cards/goblin.png",
  },
  {
    id: 8,
    name: "Loudly Crying Face",
    photoDir: "../src/assets/cards/loudly-crying-face.png",
  },
  {
    id: 9,
    name: "Zany Face",
    photoDir: "../src/assets/cards/zany-face.png",
  },
  {
    id: 10,
    name: "Upside-Down Face",
    photoDir: "../src/assets/cards/upside-down-face.png",
  },
  {
    id: 11,
    name: "Squinting Face With Tongue",
    photoDir: "../src/assets/cards/squinting-face-with-tongue.png",
  },
  {
    id: 12,
    name: "Pile of Poo",
    photoDir: "../src/assets/cards/pile-of-poo.png",
  },
  {
    id: 13,
    name: "Drooling Face",
    photoDir: "../src/assets/cards/drooling-face.png",
  },
  {
    id: 14,
    name: "Nauseated Face",
    photoDir: "../src/assets/cards/nauseated-face.png",
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

  return (
    <>
      <Score position={"right"} color={"text-purple-600"}>
        HighScore: {highscore.current}
      </Score>

      <Score position={"left"} color={"text-blue-800"}>
        Score: {score}
      </Score>

      <ul className="grid auto-rows-min	grid-cols-3 gap-20 gap-y-12 p-5 pl-20 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {cards.map(card => (
          <li key={card.id}>
            <Card
              card={card}
              clickedCards={clickedCards}
              onCardClick={onCardClick}
              setScore={setScore}
              setGameOver={setGameOver}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

CardList.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  clickedCards: PropTypes.array,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  highscore: PropTypes.object.isRequired,
};

export default CardList;

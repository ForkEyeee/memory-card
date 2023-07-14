import Drink from "./Drink";
import { useEffect, useState } from "react";

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

const drinkData = [
  {
    id: 1,
    name: "Angry Face",
    photoDir: "../src/assets/images/angry-face.png",
  },
  {
    id: 2,
    name: "Astonished Face",
    photoDir: "../src/assets/images/astonished-face.png",
  },
  {
    id: 3,
    name: "Beaming Face With Smiling Eyes",
    photoDir: "../src/assets/images/beaming-face-with-smiling-eyes.png",
  },
  {
    id: 4,
    name: "Face With Symbols On Mouth",
    photoDir: "../src/assets/images/face-with-symbols-on-mouth.png",
  },
  {
    id: 5,
    name: "Face With Tears Of Joy",
    photoDir: "../src/assets/images/face-with-tears-of-joy.png",
  },
  {
    id: 6,
    name: "Ghost",
    photoDir: "../src/assets/images/ghost.png",
  },
  {
    id: 7,
    name: "Goblin",
    photoDir: "../src/assets/images/goblin.png",
  },
  {
    id: 8,
    name: "Loudly Crying Face",
    photoDir: "../src/assets/images/loudly-crying-face.png",
  },
  {
    id: 9,
    name: "Zany Face",
    photoDir: "../src/assets/images/zany-face.png",
  },
  {
    id: 10,
    name: "Upside-Down Face",
    photoDir: "../src/assets/images/upside-down-face.png",
  },
  {
    id: 11,
    name: "Squinting Face With Tongue",
    photoDir: "../src/assets/images/squinting-face-with-tongue.png",
  },
  {
    id: 12,
    name: "Pile of Poo",
    photoDir: "../src/assets/images/pile-of-poo.png",
  },
  {
    id: 13,
    name: "Drooling Face",
    photoDir: "../src/assets/images/drooling-face.png",
  },
  {
    id: 14,
    name: "Nauseated Face",
    photoDir: "../src/assets/images/nauseated-face.png",
  },
];

function DrinkList({ setWin, clickedPhoto, setClickedPhoto, score, setScore }) {
  const [isLoading, setIsLoading] = useState(true);

  const drinks = shuffle(drinkData);
  useEffect(() => {
    setIsLoading(false);

    // Optional: Cleanup function (similar to componentWillUnmount in classes)
    return () => {};
  }, []);

  useEffect(() => {
    if (clickedPhoto !== null) {
      setScore(score => score + 1);
    }

    // Optional: Cleanup function (similar to componentWillUnmount in classes)
    return () => {};
  }, [clickedPhoto, setScore]);

  return !isLoading ? (
    <>
      <p>{score}</p>
      <ul className="grid auto-rows-min	 grid-cols-3 gap-20 p-5 pl-20 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
        {drinks.map(drink => (
          <Drink
            drinkPhotoName={drink.photoDir}
            drinkName={drink.name}
            currentScore={score}
            drinkId={drink.id}
            currentDrink={clickedPhoto}
            onClickedPhoto={setClickedPhoto}
            onClickScore={setScore}
            onWin={setWin}
            key={drink.id}
          />
        ))}
      </ul>
    </>
  ) : (
    <h3>Loading ....</h3>
  );
}

export default DrinkList;

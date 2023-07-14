import Drink from "./Drink";
import { useEffect, useState } from "react";

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

const drinkData = [
  {
    id: 1,
    name: "berry-drink",
    photoDir: "../src/assets/images/berry-drink.jpg",
    isClicked: false,
  },
  {
    id: 2,
    name: "brown-drink",
    photoDir: "../src/assets/images/brown-drink.jpg",
    isClicked: false,
  },
  {
    id: 3,
    name: "brown-tea-drink",
    photoDir: "../src/assets/images/brown-tea-drink.jpg",
    isClicked: false,
  },
  {
    id: 4,
    name: "cocktail-drink",
    photoDir: "../src/assets/images/cocktail-drink.jpg",
    isClicked: false,
  },
  {
    id: 5,
    name: "cookies-drink",
    photoDir: "../src/assets/images/cookies-drink.jpg",
    isClicked: false,
  },
  {
    id: 6,
    name: "green-drink",
    photoDir: "../src/assets/images/green-drink.jpg",
    isClicked: false,
  },
  {
    id: 7,
    name: "iced-tea-drink",
    photoDir: "../src/assets/images/iced-tea-drink.jpg",
    isClicked: false,
  },
  {
    id: 8,
    name: "lemonade-drink",
    photoDir: "../src/assets/images/lemonade-drink.jpg",
    isClicked: false,
  },
  {
    id: 9,
    name: "lime-drink",
    photoDir: "../src/assets/images/lime-drink.jpg",
    isClicked: false,
  },
  {
    id: 10,
    name: "milkshake-drink",
    photoDir: "../src/assets/images/milkshake-drink.jpg",
    isClicked: false,
  },
  {
    id: 11,
    name: "orange-drink",
    photoDir: "../src/assets/images/orange-drink.jpg",
    isClicked: false,
  },
  {
    id: 12,
    name: "water-drink",
    photoDir: "../src/assets/images/water-drink.jpg",
    isClicked: false,
  },
];

function DrinkList({ setWin, clickedPhoto, setClickedPhoto, score, setScore }) {
  console.log(clickedPhoto);
  const drinks = shuffle(drinkData);

  useEffect(() => {
    if (clickedPhoto !== null) {
      setScore(score => score + 1);
    }

    console.log("Component mounted or propValue changed");

    // Optional: Cleanup function (similar to componentWillUnmount in classes)
    return () => {
      console.log("Cleanup code here");
    };
  }, [clickedPhoto, setScore]);

  return (
    <>
      <p>{score}</p>
      <ul className="grid auto-rows-min grid-cols-3 gap-4 p-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
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
  );
}

export default DrinkList;

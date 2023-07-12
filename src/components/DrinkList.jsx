import Drink from "./Drink";

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

function DrinkList() {
  const drinks = drinkData;
  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        {drinks.map((drink) => (
          <Drink
            drinkPhotoName={drink.photoDir}
            drinkName={drink.name}
            key={drink.id}
          />
        ))}
      </ul>
      <button className="text-xl text-yellow-500 font-semibold text-center "></button>
    </div>
  );
}

export default DrinkList;

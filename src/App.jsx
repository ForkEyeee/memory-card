import DrinkList from "./components/CardList";
import Header from "./components/header";
import GameOverModal from "./components/GameOverModal";
import { useState, useRef } from "react";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const highScoreRef = useRef(0);

  if (highScoreRef.current < score) {
    highScoreRef.current = score;
  }
  return (
    <div>
      {gameOver && (
        <GameOverModal
          onCardClick={setClickedCards}
          setGameOver={setGameOver}
          setScore={setScore}
          gameOver={gameOver}
        />
      )}

      <Header />
      <DrinkList
        onCardClick={setClickedCards}
        setGameOver={setGameOver}
        clickedCards={clickedCards}
        score={score}
        setScore={setScore}
        //pass ref to drinklist
      />
    </div>
  );
}

export default App;

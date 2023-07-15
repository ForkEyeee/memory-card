import DrinkList from "./components/CardList";
import Header from "./components/header";
import GameOverModal from "./components/GameOverModal";
import { useState, useRef } from "react";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const highScoreRef = useRef(0);

  highScoreRef.current < score && gameOver
    ? (highScoreRef.current = score)
    : highScoreRef.current;

  return (
    <div>
      <GameOverModal
        onCardClick={setClickedCards}
        setGameOver={setGameOver}
        setScore={setScore}
        gameOver={gameOver}
      />
      <Header />
      <DrinkList
        onCardClick={setClickedCards}
        setGameOver={setGameOver}
        clickedCards={clickedCards}
        score={score}
        setScore={setScore}
        highscore={highScoreRef}
      />
    </div>
  );
}

export default App;

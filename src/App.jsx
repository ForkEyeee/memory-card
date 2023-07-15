import DrinkList from "./components/CardList";
import Header from "./components/Header";
import GameOverModal from "./components/GameOverModal";
import Footer from "./components/Footer";
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
    <div className="flex h-screen flex-col justify-between">
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
      <Footer />
    </div>
  );
}

export default App;

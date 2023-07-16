import CardList from "./components/CardList";
import Header from "./components/Header";
import GameOverModal from "./components/GameOverModal";
import Footer from "./components/Footer";
import { useState, useRef } from "react";

function App() {
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const highScoreRef = useRef(0);

  highScoreRef.current < score && (win || lose)
    ? (highScoreRef.current = score)
    : highScoreRef.current;

  return (
    <div className="flex h-screen flex-col justify-between bg-slate-100">
      <Header score={score} highScore={highScoreRef} />
      <GameOverModal
        onCardClick={setClickedCards}
        setLose={setLose}
        setScore={setScore}
        lose={lose}
        win={win}
        setWin={setWin}
      />

      <CardList
        onCardClick={setClickedCards}
        win={win}
        setWin={setWin}
        setLose={setLose}
        clickedCards={clickedCards}
        setScore={setScore}
      />
      <Footer />
    </div>
  );
}

export default App;

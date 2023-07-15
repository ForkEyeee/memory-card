import CardList from "./components/CardList";
import Header from "./components/Header";
import GameOverModal from "./components/GameOverModal";
import Footer from "./components/Footer";
import { useState, useRef } from "react";

function App() {
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const highScoreRef = useRef(0);

  highScoreRef.current < score && (lose || win)
    ? (highScoreRef.current = score)
    : highScoreRef.current;

  return (
    <div className="flex h-screen flex-col justify-between">
      <GameOverModal
        onCardClick={setClickedCards}
        setLose={setLose}
        setScore={setScore}
        lose={lose}
        win={win}
        setWin={setWin}
      />
      <Header />
      <CardList
        onCardClick={setClickedCards}
        win={win}
        setWin={setWin}
        setLose={setLose}
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

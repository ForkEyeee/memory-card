import cardData from "./components/CardData";
import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import { HelpModal } from "./components/HelpModal";
import GameOverModal from "./components/GameOverModal";
import Footer from "./components/Footer";

function shuffleCards(cardData) {
  return [...cardData].sort(() => Math.random() - 0.5);
}

function App() {
  const [gameResult, setGameResult] = useState({
    win: undefined,
  });
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(shuffleCards(cardData));

  useEffect(() => {
    if (clickedCards.length === cardData.length) {
      setGameResult(prevGameResult => ({
        ...prevGameResult,
        win: true,
      }));
    }
    setHighScore(
      gameResult.win !== undefined
        ? highScore < score
          ? score
          : highScore
        : highScore
    );
    return () => {};
  }, [clickedCards, highScore, score, gameResult.win]);

  function determineWin(cardId) {
    if (clickedCards.includes(cardId)) {
      setGameResult(prevGameResult => ({
        ...prevGameResult,
        win: false,
      }));
      return;
    }
    setClickedCards(current => [...current, cardId]);
    setShuffledCards(shuffleCards(cardData));
    setScore(score => score + 1);
  }

  function resetGameState() {
    setScore(0);
    setClickedCards([]);
    setShuffledCards(shuffleCards(cardData));
    setGameResult(prevGameResult => ({
      ...prevGameResult,
      win: undefined,
    }));
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header score={score} highScore={highScore} />
      <div className="flex-grow bg-gradient-to-r from-blue-500 to-green-500">
        {gameResult.win !== undefined && (
          <GameOverModal resetGame={resetGameState} gameResult={gameResult} />
        )}
        <div className="flex justify-end">
          <HelpModal />
        </div>
        <CardList
          onCardClick={setClickedCards}
          determineWin={determineWin}
          shuffledCards={shuffledCards}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

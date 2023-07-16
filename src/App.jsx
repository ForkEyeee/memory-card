import * as React from "react";
import * as ReactDOM from "react-dom/client";
import cardData from "./components/CardData";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import CardList from "./components/CardList";
import Header from "./components/Header";
import GameOverModal from "./components/GameOverModal";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

function App() {
  const [gameResult, setGameResult] = useState({
    win: undefined,
  });
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (clickedCards.length === cardData.length) {
      setGameResult(prevGameResult => ({
        ...prevGameResult,
        win: true,
      }));
    }
    setHighScore(highScore < score && gameResult.win ? score : highScore);
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
    setScore(score => score + 1);
  }

  function resetGameState() {
    setScore(0);
    setClickedCards([]);
    setGameResult(prevGameResult => ({
      ...prevGameResult,
      win: undefined,
    }));
  }

  return (
    <div className="flex h-screen flex-col justify-between bg-slate-100">
      <Header score={score} highScore={highScore} />
      {gameResult.win !== undefined && (
        <GameOverModal resetGame={resetGameState} gameResult={gameResult} />
      )}
      <CardList onCardClick={setClickedCards} determineWin={determineWin} />
      <Footer />
    </div>
  );
}

export default App;

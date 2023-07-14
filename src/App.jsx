import DrinkList from "./components/DrinkList";
import Header from "./components/header";
import GameOverModal from "./components/GameOverModal";
import { useState } from "react";
function App() {
  const [win, setWin] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);
  const [score, setScore] = useState(0);
  // const highScore = useRef();

  return (
    <div>
      {win && (
        <GameOverModal
          setClickedPhoto={setClickedPhoto}
          setScore={setScore}
          setWin={setWin}
          win={win}
        />
      )}

      <Header />
      <DrinkList
        setWin={setWin}
        clickedPhoto={clickedPhoto}
        setClickedPhoto={setClickedPhoto}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}

export default App;

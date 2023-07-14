import "./index.css";
import DrinkList from "./components/DrinkList";
import Header from "./components/header";
import { useState } from "react";
function App() {
  const [win, setWin] = useState(false);
  if (win) alert("game over");

  return (
    <div>
      {win}

      <Header />
      <DrinkList setWin={setWin} />
    </div>
  );
}

export default App;

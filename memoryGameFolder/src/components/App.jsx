import { GameLogic } from "./GameLogic";
import { Header } from "./Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState(1);
  return (
    <div className="topAndBottom">
      <header>
        <Header level={level}></Header>
      </header>
      <div className="bottomContainer">
        <div className="gifContainer">
          <GameLogic setLevel={setLevel} level={level} />
        </div>
      </div>
    </div>
  );
}
export default App;

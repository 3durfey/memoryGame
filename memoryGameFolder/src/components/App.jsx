import { GameLogic } from "./GameLogic";
import { Header } from "./Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [level, setLevel] = useState(1);
  const [searchTerm, setSearchTerm] = useState("corgi");

  if (localStorage.getItem("level") === null) {
    localStorage.setItem("level", 1);
  }
  return (
    <div className="topAndBottom">
      <header>
        <Header
          level={level}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        ></Header>
      </header>
      <div className="bottomContainer">
        <div className="gifContainer">
          <GameLogic
            setLevel={setLevel}
            level={level}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
}
export default App;

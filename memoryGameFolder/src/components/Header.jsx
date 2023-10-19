import { useEffect } from "react";
function Header({ level }) {
  return (
    <div className="header">
      <h1>Level {level}</h1>
      <h2>HighScore Level {localStorage.getItem("level")}</h2>
    </div>
  );
}

export { Header };

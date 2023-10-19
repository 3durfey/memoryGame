import { useEffect } from "react";
function Header({ level }) {
  return (
    <div className="header">
      <h1>Level {level}</h1>
    </div>
  );
}

export { Header };

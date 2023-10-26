import { useEffect } from "react";
function Header({ level, setSearchTerm }) {
  let searchValue = "";
  return (
    <div className="header">
      <h1>Level {level}</h1>
      <h2>HighScore Level {localStorage.getItem("level")}</h2>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          onChange={(e) => {
            searchValue = e.target.value;
          }}
        />
        <button
          className="searchButton"
          onClick={() => {
            setSearchTerm(searchValue);
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export { Header };

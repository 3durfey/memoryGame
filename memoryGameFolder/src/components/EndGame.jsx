import "./EndGame.css";

function EndGame({ level, nextLevel, gameEnd, restart }) {
  if (gameEnd === "fail") {
    return (
      <div className="endGame">
        <h1>Game Over</h1>
        <button onClick={() => restart()}>Fail, Restart at 1</button>
      </div>
    );
  }
  return (
    <div className="endGame">
      <h1>Level {level} Complete</h1>
      <button className="btn btn-secondary" onClick={() => nextLevel()}>
        Continue
      </button>
    </div>
  );
}

export { EndGame };

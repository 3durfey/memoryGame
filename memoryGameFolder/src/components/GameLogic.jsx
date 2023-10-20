import { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { RenderGifs } from "./GifButton";
import { EndGame } from "./EndGame";
import { randomArrayGenerator } from "./randomNumber";

function GameLogic({ setLevel, level }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedArray, setClickedArray] = useState([]);
  const [gameEnd, setGameEnd] = useState("playing");
  const [numberOfGifs, setNumberOfGifs] = useState(2);
  const [clicks, setClicks] = useState(0);

  const gifArrayLength = data.length - 1;
  //function to add gif to array
  function addGif(id) {
    for (let x = 0; x < clickedArray.length; x++) {
      if (data[clickedArray[x]].id === id) {
        setGameEnd("fail");
        return;
      }
    }

    if (clicks === numberOfGifs) {
      setGameEnd("pass");
    }

    for (let x = 0; x < data.length; x++) {
      if (data[x].id === id) {
        setClickedArray([...clickedArray, x]);
      }
    }
    setClicks(clicks + 1);
  }

  function nextLevel() {
    let tempLevel = localStorage.getItem("level");
    if (tempLevel < level) {
      localStorage.setItem("level", level);
    }
    setLevel(level + 1);
    setClicks(0);
    setNumberOfGifs(numberOfGifs + 1);
    setClickedArray([]);
    setGameEnd("playing");
  }
  function restart() {
    setClicks(0);
    setLevel(1);
    setNumberOfGifs(2);
    setClickedArray([]);
    setGameEnd("playing");
  }
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const gf = new GiphyFetch("Dc8YiYtIJC8VnCPxCHO04ZiKwrBqzTzZ");
      const gifs = await gf.search("corgi", {
        sort: "relevant",
        lang: "es",
        limit: 2000,
        type: "stickers",
      });
      setIsLoading(false);
      setData(
        gifs.data.filter(
          (gif) =>
            gif.images.fixed_height.height === 200 &&
            gif.images.fixed_height.width === 200
        )
      );
    })();
  }, []);
  if (gameEnd === "playing") {
    return (
      <>
        <RenderGifs
          data={data}
          isLoading={isLoading}
          addGif={addGif}
          randomArray={randomArrayGenerator(
            clickedArray,
            numberOfGifs,
            gifArrayLength
          )}
          className="container gifs"
        />
      </>
    );
  } else if (gameEnd === "pass" || gameEnd === "fail") {
    return (
      <EndGame
        level={level}
        nextLevel={nextLevel}
        gameEnd={gameEnd}
        restart={restart}
      />
    );
  }
}
export { GameLogic };

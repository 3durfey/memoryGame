import { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { RenderGifs } from "./GifButton";
import { EndGame } from "./EndGame";
import { randomArrayGenerator } from "./randomNumber";

function Giphy() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedArray, setClickedArray] = useState([]);
  const [gameEnd, setGameEnd] = useState(false);
  const [numberOfGifs, setNumberOfGifs] = useState(2);
  //function to add gif to array
  function addGif(id) {
    for (let x = 0; x < clickedArray.length; x++) {
      if (data[clickedArray[x]].id === id) {
        setGameEnd(true);
      }
    }
    for (let x = 0; x < data.length; x++) {
      if (data[x].id === id) {
        setClickedArray([...clickedArray, x]);
        console.log(clickedArray);
      }
    }
  }

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const gf = new GiphyFetch("Dc8YiYtIJC8VnCPxCHO04ZiKwrBqzTzZ");
      const gifs = await gf.search("pokemon", {
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
  if (!gameEnd) {
    return (
      <>
        <RenderGifs
          data={data}
          isLoading={isLoading}
          addGif={addGif}
          randomArray={randomArrayGenerator(clickedArray, numberOfGifs)}
          className="container gifs"
        />
      </>
    );
  } else {
    return <EndGame />;
  }
}
export { Giphy };

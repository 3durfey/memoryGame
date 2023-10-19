import { Loader } from "./Loader";
import "./GifButton.css";
function RenderGifs({ data, isLoading, addGif, randomArray }) {
  if (isLoading) {
    return <Loader />;
  }
  let newArray = [];
  let index = 0;

  for (let x = 0; x < randomArray.length; x++) {
    newArray.push(data[randomArray[x]]);
  }
  //console.log(randomArray);
  return newArray.map((gif) => {
    return (
      <GifButton
        key={index++}
        gifKey={gif.id}
        src={gif.images.fixed_height.url}
        clicked={() => addGif(gif.id)}
      />
    );
  });
}
function GifButton({ gifKey, src, clicked }) {
  return (
    <button className="gif" id={gifKey} onClick={() => clicked(gifKey)}>
      <img src={src} alt="gif" />
    </button>
  );
}
export { GifButton, RenderGifs };

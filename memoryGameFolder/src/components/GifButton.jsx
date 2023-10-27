import { Loader } from "./Loader";
import "./GifButton.css";
import PropTypes from "prop-types";

RenderGifs.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  addGif: PropTypes.func,
  randomArray: PropTypes.array,
};
GifButton.propTypes = {
  gifKey: PropTypes.string,
  src: PropTypes.string,
  clicked: PropTypes.func,
};
function RenderGifs({ data, isLoading, addGif, randomArray }) {
  if (isLoading) {
    return <Loader />;
  }
  let newArray = [];
  let index = 0;

  for (let x = 0; x < randomArray.length; x++) {
    newArray.push(data[randomArray[x]]);
  }
  return newArray.map((gif) => {
    console.log("reloaded");
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
    <button
      className="gif gifAnimation"
      id={gifKey}
      onClick={() => clicked(gifKey)}
    >
      <img src={src} alt="gif" />
    </button>
  );
}
export { GifButton, RenderGifs };

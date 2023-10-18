import { Loader } from "./Loader";

function RenderGifs({ data, isLoading, addGif, randomArray }) {
  if (isLoading) {
    return <Loader />;
  }
  let newArray = [];
  for (let x = 0; x < randomArray.length; x++) {
    newArray.push(data[randomArray[x]]);
  }
  // console.log(randomArray);
  return newArray.map((gif) => {
    if (gif !== undefined) {
      return (
        <GifButton
          key={gif.id}
          gifKey={gif.id}
          src={gif.images.fixed_height.url}
          clicked={() => addGif(gif.id)}
        />
      );
    }
  });
}
function GifButton({ gifKey, src, clicked }) {
  return (
    <button className="gif" key={gifKey} onClick={() => clicked(gifKey)}>
      <img src={src} alt="gif" />
      <div className="">{gifKey}</div>
    </button>
  );
}
export { GifButton, RenderGifs };

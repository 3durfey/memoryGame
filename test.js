function getRandomInt(min, max, arrayLength) {
  let array = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  do {
    let temp = Math.round(Math.floor(Math.random() * (max - min + 1) + min));
    if (array.find((item) => item === temp) === undefined) array.push(temp);
  } while (array.length !== arrayLength);
  return array;
}
console.log(getRandomInt(1, 30, 30));
// Expected output: 0, 1 or 2

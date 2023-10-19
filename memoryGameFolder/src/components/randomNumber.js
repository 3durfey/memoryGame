function randomArrayGenerator(alreadyPicked, numberOfGifs, gifArrayLength) {
  if (gifArrayLength === -1) {
    gifArrayLength = 20;
  }
  //default values 0, 29, 30
  return inputNeededNumbers(
    getRandomInt(0, gifArrayLength, numberOfGifs),
    alreadyPicked,
    numberOfGifs
  );
}
//gets a random number from min to max, numberOfGifs is the number of gifs that need to be in the array
function getRandomInt(min, max, numberOfGifs) {
  let arrayLength = numberOfGifs + 1;
  let array = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  do {
    let temp = Math.round(Math.floor(Math.random() * (max - min + 1) + min));
    if (array.find((item) => item === temp) === undefined) array.push(temp);
  } while (array.length !== arrayLength);
  return array;
}

//function takes an array and an array of numbers that need to be in the array, inserts them at random indexes
function inputNeededNumbers(array, neededNums, numberOfGifs) {
  let bannedIndex = [];
  for (let i = 0; i < neededNums.length; i++) {
    if (array.find((item) => item === neededNums[i]) === undefined) {
      array[randomNum()] = neededNums[i];
    } else {
      for (let x = 0; x < array.length; x++)
        if (array[x] === neededNums[i]) bannedIndex.push(x);
    }
  }
  //function returns a random number from 0 to 4 that is not in the bannedIndex array
  function randomNum() {
    let returnValue;
    do {
      returnValue = Math.round(
        Math.floor(Math.random() * (numberOfGifs - 0 + 1) + 0)
      );
    } while (bannedIndex.find((item) => item === returnValue) !== undefined);
    bannedIndex.push(returnValue);
    return returnValue;
  }
  return array;
}
export { randomArrayGenerator };

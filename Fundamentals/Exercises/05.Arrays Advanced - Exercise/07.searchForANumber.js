function searchForANumber(collection, numbers) {
  let numToTake = numbers[0];
  let numToDel = numbers[1];
  let numToFind = numbers[2];
  let modifiedArr = collection.slice(0, numToTake);
  modifiedArr.splice(0, numToDel);
  let counter = 0;

  for (let i = 0; i <= modifiedArr.length; i++) {
    if (numToFind === modifiedArr[i]) {
      counter++;
    }
  }
  console.log(`Number ${numToFind} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);

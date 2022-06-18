function listOfNumbers(arr) {
  let sortedArr = arr.sort((a, b) =>
     a.localeCompare(b));

  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}
listOfNumbers(["Watermelon", "Banana", "Apples"]);

//80/100;

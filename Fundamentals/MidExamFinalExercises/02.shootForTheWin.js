function solve(input) {
  let array = input.shift().split(" ").map(Number);
  let counter = 0;
  while (input[0] != "End") {
    let index = Number(input.shift());
    if (index >= 0 && index <= array.length - 1) {
      for (let i = 0; i < array.length; i++) {
        if (i!= index && array[i]!=-1) {
          if (array[i] > array[index]) {
            array[i] -= array[index];
          } else {
            array[i] += array[index];
          }
        }
      }
      array[index] = -1;
      counter++;
    } else {
      continue;
    }
  }
  console.log(`Shot targets: ${counter} -> ${array.join(" ")}`);
}
solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
console.log("...........")
solve(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
//100/100;

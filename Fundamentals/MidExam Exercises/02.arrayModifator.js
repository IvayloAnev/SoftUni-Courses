function solve(input) {
  let nums = input.shift().split(" ").map(Number);

  while (input[0] != "end") {
    //while recieve end ;
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let index1 = tokens[1];
    let index2 = tokens[2];

    switch (command) {
      case "swap": //"swap {index1} {index2}"
        let temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
        break;
      case "multiply": //"multiply {index1} {index2}"
        nums[index1] *= nums[index2];
        break;
      case "decrease": //"decrease"
        for (let i = 0; i < nums.length; i++) {
          nums[i]--;
        }
        break;
    }
  }
  console.log(nums.join(", ")); //print
}
solve([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
solve([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
//100/100;

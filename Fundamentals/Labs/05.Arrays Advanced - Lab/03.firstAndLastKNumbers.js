function firstAndLastKNumbers(arr) {
  let k = arr[0];
  let newarr1 = [];
  let newarr2 = [];
  newarr1 = arr.slice(1, k + 1);
  newarr2 = arr.slice(-k);
  console.log(newarr1.join(` `));
  console.log(newarr2.join(` `));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);
//100/100;
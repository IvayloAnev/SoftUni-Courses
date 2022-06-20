function districtArea(arrNum) {
  let result = [];
  for (let element of arrNum) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  console.log(result.join(` `));
}
districtArea([1, 2, 3, 4]);
districtArea([7, 8, 9, 7, 2, 3, 4, 1, 2]);
districtArea([20, 8, 12, 13, 4, 4, 8, 5]);

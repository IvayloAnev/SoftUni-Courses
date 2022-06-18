function negativeAndPosistiveNumbers(arr) {
  let arrL = arr.length;
  let newarr = [];

  for (i = 0; i < arrL; i++) {
    let currNum = arr[i];
    if (currNum < 0) {
      newarr.unshift(currNum);
    } else {
      newarr.push(currNum);
    }
  }
  let newarrL = newarr.length;
  for (i = 0; i < newarrL; i++) {
    let currNewArrNum = newarr[i];
    console.log(currNewArrNum);
  }
}
negativeAndPosistiveNumbers(["3", "-2", "0", "-1"]);
//100/100;
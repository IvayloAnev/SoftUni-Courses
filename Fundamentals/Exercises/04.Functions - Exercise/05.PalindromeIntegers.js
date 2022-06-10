function palindromes(arr) {
  let arrL = arr.length;
  for (i = 0; i < arrL; i++) {
    let currNumber = arr[i];
    let curNumStr = currNumber.toString();
    let reversedCurNumStr = reverseString(curNumStr);
    let isPalindrome = true;
    if (curNumStr === reversedCurNumStr) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
    console.log(isPalindrome);
  }

  function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }
}
palindromes([32, 2, 232, 1010]);

//100/100;

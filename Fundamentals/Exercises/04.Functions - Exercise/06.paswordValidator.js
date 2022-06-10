function solve(password) {
  function isLengthEnougt(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function isOnlyLettersAndDigits(password) {
    for (let currCharIndex of password) {
      let currChar = currCharIndex.charCodeAt(0);
      if (
        !(currChar >= 48 && currChar <= 57) &&
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122)
      ) {
        return false;
      }
    }
    return true;
  }

  function isHavingAtleastTwoDigits(password) {
    let count = 0;
    for (let charIndex of password) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }

  let isLengthValid = isLengthEnougt(password);
  let isLettersAndDiggitsOnly = isOnlyLettersAndDigits(password);
  let isContainingAtLeastTwoDigits = isHavingAtleastTwoDigits(password);

  if (
    isLengthValid &&
    isLettersAndDiggitsOnly &&
    isContainingAtLeastTwoDigits
  ) {
    console.log(`Password is valid`);
  }
  if (!isLengthValid) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (!isLettersAndDiggitsOnly) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (!isContainingAtLeastTwoDigits) {
    console.log(`Password must have at least 2 digits`);
  }
}
//100/100

solve("MyPass123");

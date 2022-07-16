function solve(str) {
  let word1 = [];
  let word2 = [];
  let revWord1 = [];
  let revWord2 = [];
  for (let i = 0; i < str.length / 2; i++) {
    let currChar = str[i];
    word1.push(currChar);
  }
  for (let j = word1.length - 1; j >= 0; j--) {
    let currCharr = word1[j];
    revWord1.push(currCharr);
  }
  for (let k = str.length / 2; k < str.length; k++) {
    let currChar = str[k];
    word2.push(currChar);
  }

  for (let h = word1.length - 1; h >= 0; h--) {
    let currCharr = word2[h];
    revWord2.push(currCharr);
  }
  console.log(revWord1.join(""));
  console.log(revWord2.join(""));
}
//100/100
solve("tluciffiDsIsihTgnizamAoSsIsihT");
console.log('........')
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')

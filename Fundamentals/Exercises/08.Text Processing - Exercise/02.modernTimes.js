function solve(input) {
  let sentence = input.split(" ");
  for (let word of sentence) {
    if (word.startsWith("#") && word.length > 1) {
        let asciiCode = word.charCodeAt(1);
   
        let isLetter = 
        (asciiCode>=65 && asciiCode<=90)||
        (asciiCode>=97 && asciiCode<=122)
      if(isLetter){
          console.log(word.substring(1,));
      }
    }
  }
}
//100/100;
solve(" #socialMedia");
console.log(".........")
solve('#The symbol # is known #variously in English-speaking #regions as the #number sign')
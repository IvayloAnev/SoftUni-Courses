function solve(input) {
  let result = {};
  let words = input.split(" ");
  for (let word of words) {
    word = word.toLocaleLowerCase();
    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  let filtred = Object.entries(result)
    .filter(([word, count]) => count % 2 === 1)
    .map((entry) => entry[0])
    .join(" ");

  console.log(filtred);
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
console.log(".........");
solve("Cake IS SWEET is Soft CAKE sweet Food");

//100/100

function solve(input) {
  let num = input.shift();
  let pieces = {};

  for (let i = 1; i <= num; i++) {
    let [name, author, key] = input.shift().split("|");
    pieces[name] = {
      author,
      key,
    };
  }
  while (input[0] != "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let name = tokens[1];

    if (command == "Add") {
      let author = tokens[2];
      let key = tokens[3];
      if (!pieces.hasOwnProperty(name)) {
        pieces[name] = {
          author,
          key,
        };
        console.log(`${name} by ${author} in ${key} added to the collection!`);
      } else {
        console.log(`${name} is already in the collection!`);
      }
    } else if (command == "Remove") {
      if (pieces.hasOwnProperty(name)) {
        delete pieces[name];
        console.log(`Successfully removed ${name}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    } else if (command == "ChangeKey") {
      let newKey = tokens[2];
      if (pieces.hasOwnProperty(name)) {
        pieces[name].key = newKey;
        console.log(`Changed the key of ${name} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      }
    }
  }
  for (let piece in pieces) {
    console.log(
      `${piece} -> Composer: ${pieces[piece].author}, Key: ${pieces[piece].key}`
    );
  }
}
solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log("...............");
solve([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
//100/100

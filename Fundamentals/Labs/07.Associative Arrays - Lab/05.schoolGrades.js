function solve(input) {
  let result = {};
  let avg = 0;

  for (let line of input) {
    let token = line.split(" ");
    let name = token.shift();
    let grades = token.map(Number);

    if (!result.hasOwnProperty(name)) {
      result[name] = grades;
    } else {
      let oldGrades = result[name];
      let newGrades = grades;
      result[name] = oldGrades.concat(newGrades);
    }
  }
  let sortedObject = Object.entries(result);
  sortedObject.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [key, value] of sortedObject) {
    let sum = 0;
    for (let grade of value) {
      sum += grade;
    }
    avg = sum / value.length;
    console.log(`${key}: ${avg.toFixed(2)}`);
  }
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("........");
solve(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);

function schoolGrades(input) {
  //collection
  let result = new Map();
  //for each line
  for (let line of input) {
    //parse and convert to Number
    let tokens = line.split(' ');
    let name = tokens.shift();
    let grades = (tokens = tokens.map(Number));
    // ensure names and grades always exist
    if (result.has(name) == false) {
      result.set(name, []);
    }
    //find existing grades and add new grades
    // nalivash kum imeto ocenki v mapa
    let existing = result.get(name);
    for (let grade of grades) {
      existing.push(grade);
    }
  }
  //sort by student name
  let sorted = Array.from(result);
  sorted.sort = ((a, b) => a[0].localeCompare(b[0]));
  //print

  for (let [name, grades] of sorted) {
    let avarage = 0;
    for (let grade of grades) {
      avarage += grade;
    }
    avarage /= grades.length;
    console.log(`${name}: ${avarage.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
console.log("........");
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);

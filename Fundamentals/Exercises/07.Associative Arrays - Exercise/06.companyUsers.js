function solve(input) {
  let result = {};
  for (let line of input) {
    [company, id] = line.split(" -> ");
    if (!result.hasOwnProperty(company)) {
      result[company] = new Set();
    }
    result[company].add(id);
  }
  let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [key, value] of sorted) {
    console.log(key);
    let employes = Array.from(value);
    for (let id of employes) {
      console.log(`-- ${id}`);
    }
  }
}

solve([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
//100/100

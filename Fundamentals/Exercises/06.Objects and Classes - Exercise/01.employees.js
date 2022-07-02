function solve(input) {
  let listOfEmployees = {};
  for (let employee of input) {
    listOfEmployees.name = employee;
    listOfEmployees.number = employee.length;
    console.log(
      `Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.number}`
    );
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
//100/100;

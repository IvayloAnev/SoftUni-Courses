function adressBook(input) {
  //collection
  let result = {};
  //for every key
  for (let line of input) {
    //parse
    let [name, adress] = line.split(":");
    result[name] = adress;
  }
  //sort
  let sorted = Object.entries(result);
  sorted.sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];
    return nameA.localeCompare(nameB);
  });

  //print
  for (let [name, adress] of sorted) {
    console.log(name, "->", adress);
  }
}
adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);

console.log(".........");
adressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);

//100/100;
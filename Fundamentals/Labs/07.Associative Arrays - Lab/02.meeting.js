function meeting(input) {
  // collection
  let result = {};
  //for every item of the input
  for (let line of input) {
    //parse
    let [day, name] = line.split(" ");
    //store only if the day is avaivble
    if (result.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      result[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  //print result
  for (let day in result) {
    console.log(`${day} -> ${result[day]}`);
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
console.log(".........");
meeting([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
//100/100;
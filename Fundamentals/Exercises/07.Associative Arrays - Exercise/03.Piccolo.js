function solve(input) {
  let parking = new Set(); //create collection MAP
  for (let line of input) {
    //for each line
    let [command, number] = line.split(", ");
    if (command === "IN") {
      //- if command in - record
      parking.add(number);
    } else {
      parking.delete(number); ////- if command out - delete
    }
  }
  if (parking.size === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    let sorted = Array.from(parking).sort(); 
    for (car of sorted) {
      //collection to array //sort//print
      console.log(car);
    }
  }
}
//100/100;
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])

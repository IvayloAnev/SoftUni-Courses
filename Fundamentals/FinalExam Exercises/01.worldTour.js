function solve(input) {
  let stops = input.shift();
 
  while (input[0] != "Travel") {
    let tokens = input.shift().split(":");
    let command = tokens[0];

    if (command == `Add Stop`) {
      let index = Number(tokens[1]);
      let string = tokens[2];
      let stopsAsArr = stops.split("");
      if ( index >= 0 && index <= stops.length-1) {
        stopsAsArr.splice(index, 0, string);
        stops = stopsAsArr.join("");
        console.log(stops);
      }
    } else if (command == "Remove Stop") {
      let startIndex = Number(tokens[1]);
      let endIndex = Number(tokens[2]);
      if (startIndex <= stops.length-1 && 
          endIndex <= stops.length-1  
           
         
          ) {
        if (startIndex < endIndex) {
          let subString = stops.substring(startIndex, endIndex+1);
          stops = stops.replace(subString, "");
          console.log(stops);
        } else {
          let temp = startIndex;
          startIndex = endIndex;
          endIndex = temp;
          let subString = stops.substring(startIndex, endIndex+1);
          stops = stops.replace(subString, "");
          console.log(stops);
        }
      }
    } else if (command == "Switch") {
      let oldString = tokens[1];
      let newString = tokens[2];
      stops = stops.replace(oldString, newString);
      console.log(stops);
    }
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
//66/100

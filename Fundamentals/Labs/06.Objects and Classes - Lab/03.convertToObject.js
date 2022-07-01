function convertToObject(objToAString) {
  let obj = JSON.parse(objToAString);

  for (let key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
//100/100;
function solve(input) {
  let result = {};
  for (let i = 0; i < input.length; i += 2) {
    let currResource = input[i];
    let currQty = Number(input[i + 1]);
    if (!result.hasOwnProperty(currResource)) {
      result[currResource] = currQty;
    } else {
      let oldQty = result[currResource];
      result[currResource] = oldQty + currQty;
    }
  }
  result = Object.entries(result);
  for (let [resource, qty] of result) {
    console.log(`${resource} -> ${qty}`);
  }
}

solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
//100/100
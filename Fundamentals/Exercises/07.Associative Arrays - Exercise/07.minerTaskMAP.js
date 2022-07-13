function solve(input) {
  let collection = new Map();
  for (let i = 0; i < input.length; i += 2) {
    let product = input[i];
    let qty = Number(input[i + 1]);

    if (collection.has(product)) {
      let existing = collection.get(product);
      collection.set(product, qty + existing);
    } else {
      collection.set(product, qty);
    }
  }
  for (let [product, qty] of collection) {
    console.log(`${product} -> ${qty}`);
  }
}
//100/100
solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
console.log("........");
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);

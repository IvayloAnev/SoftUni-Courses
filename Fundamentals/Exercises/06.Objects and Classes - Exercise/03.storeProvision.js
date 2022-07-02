function store(avaivableStock, deliveredStock) {
  let storedProducts = {};
  for (let index = 0; index < avaivableStock.length; index += 2) {
    let currProduct = avaivableStock[index];
    storedProducts[currProduct] = Number(avaivableStock[index + 1]);
  }
  for (let index = 0; index < deliveredStock.length; index += 2) {
    let currProduct = deliveredStock[index];
    if (!storedProducts.hasOwnProperty(currProduct)) {
      storedProducts[currProduct] = 0;
    }
    storedProducts[currProduct] += Number(deliveredStock[index + 1]);
  }
  for (let product of Object.keys(storedProducts)) {
    console.log(`${product} -> ${storedProducts[product]}`);
  }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
//100/100;

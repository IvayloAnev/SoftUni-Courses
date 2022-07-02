function solve(productsInStore, productsForDelivery) {
  let storePorducts = {};
  let L = productsInStore.length;
  let L1 = productsForDelivery.length;

  for (let i = 0; i < L; i += 2) {
    let currProduct = productsInStore[i];
    storePorducts[currProduct] = Number(productsInStore[i + 1]);
  }
  for (let j = 0; j < L1; j += 2) {
    let currProduct = productsForDelivery[j];
    if (!storePorducts.hasOwnProperty(currProduct)) {
      storePorducts[currProduct] = 0;
    }
    storePorducts[currProduct] += Number(productsForDelivery[j + 1]);
  }
  for (let product in storePorducts) {
    console.log(`${product} -> ${storePorducts[product]}`);
  }
}
solve(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
//100/100
function petShop (input){
const dogPackage = 2.5;
const catPackage = 4;
const amountDogPackages = Number(input[0]);
const amountCatPackages = Number(input[1]);
const totalSum = dogPackage * amountDogPackages + catPackage * amountCatPackages;
console.log(totalSum);
}

petShop(["5","4"]);
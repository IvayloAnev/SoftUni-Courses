function suppliesForSchool(input) {
const penPackagePrice = 5.8;
const markerPackagePrice = 7.2;
const liquidLiterPrice = 1.2;
const amountPenPackages = Number(input[0]);
const amountMarkerPackages = Number(input[1]);
const litersLiquid = Number(input[2]);
const precenatgeDiscount = Number(input[3]);
const sumPens = amountPenPackages * penPackagePrice;
const sumMarkers = amountMarkerPackages * markerPackagePrice;
const sumLiquid = litersLiquid * liquidLiterPrice;
const totalSumWithoutDiscount = sumPens + sumLiquid + sumMarkers;
const totalSumWithDiscount = totalSumWithoutDiscount - totalSumWithoutDiscount * precenatgeDiscount / 100;
console.log(totalSumWithDiscount);
    
}

suppliesForSchool(["4","2","5","13"]);



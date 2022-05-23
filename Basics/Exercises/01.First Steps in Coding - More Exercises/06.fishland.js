function fishland(input){
const priceScumriaPerKg = Number(input[0]);   
const priceCacaPerKg = Number(input[1]);
const kgsPalamud = Number(input[2]);
const kgsSafrid = Number(input[3]);
const kgsMidi = Number(input[4]);
const pricePalamudPerKg = priceScumriaPerKg * 1.6;
const priceSafridPerKg = priceCacaPerKg * 1.8 ;
const priceMidiPerKg  = 7.5;
const bill = pricePalamudPerKg * kgsPalamud + priceSafridPerKg * kgsSafrid + 
priceMidiPerKg * kgsMidi;
console.log(bill.toFixed(2));

}

fishland([6.90,4.20,1.5,2.5,1]);
fishland([5.55,3.57,4.3,3.6,7])
fishland([7.79,5.35,9.3,0,0]);
//100/100
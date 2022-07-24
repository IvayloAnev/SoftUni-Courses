function smallShop(input){
const product = input[0];
const city = input[1];
const countProduct = Number(input[2]);
let price = "";
if(city === "Sofia"){
switch(product){
    case "coffee":price=0.5;break;
    case "water":price=0.8;break;
    case "beer":price=1.2;break;
    case "sweets":price=1.45;break;
    case "peanuts":price=1.6;break;
}
} else if (city === "Plovdiv"){
    switch(product){
    case "coffee":price=0.4;break;
    case "water":price=0.7;break;
    case "beer":price=1.15;break;
    case "sweets":price=1.30;break;
    case "peanuts":price=1.5;break;
    }
}else if (city === "Varna"){
    switch(product){
        case "coffee":price=0.45;break;
        case "water":price=0.7;break;
        case "beer":price=1.10;break;
        case "sweets":price=1.35;break;
        case "peanuts":price=1.55;break;
        }

}
const bill = price * countProduct;
console.log(bill);
}
smallShop(["coffee","Varna","2"]);
smallShop(["peanuts","Plovdiv","1"]);
smallShop(["beer","Sofia","6"]);
smallShop(["water","Plovdiv","3"]);
smallShop(["sweets","Sofia","2.23"]);
//100/100;


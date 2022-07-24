function fruitShop(input){
const fruit = input[0];
const day = input[1];
const count =Number(input[2]);
let price = 0;
if (day ==="Monday"||day==="Tuesday"||day==="Wednesday"||day==="Thursday"||day==="Friday"){
    switch(fruit){
        case "banana":price = 2.5*count;console.log(price.toFixed(2));break;
        case "apple":price= 1.2*count;console.log(price.toFixed(2));break;
        case "orange":price=0.85*count;console.log(price.toFixed(2));break;
        case "grapefruit":price = 1.45*count;console.log(price.toFixed(2));break;
        case "kiwi":price = 2.7*count;console.log(price.toFixed(2));break;
        case "pineapple":price=5.5*count;console.log(price.toFixed(2));break;
        case "grapes":price=3.85*count;console.log(price.toFixed(2));break;
        default:console.log("error");break
    }       
} else if (day==="Saturday"||day==="Sunday"){
        switch(fruit){
        case "banana":price = 2.7*count;console.log(price.toFixed(2));break;
        case "apple":price=1.25*count;console.log(price.toFixed(2));break;
        case "orange":price=0.9*count;console.log(price.toFixed(2));break;
        case "grapefruit":price= count* 1.6;console.log(price.toFixed(2));break;
        case "kiwi":price = 3*count;console.log(price.toFixed(2));break;
        case "pineapple":price=5.6*count;console.log(price.toFixed(2));break;
        case "grapes":price=4.2*count;console.log(price.toFixed(2));break;
        console.log(price.toFixed(2))
        default:console.log("error");break;
        }       
    } else {
        console.log("error");
    }   
}

fruitShop(["apple","Tuesday","2"]);
fruitShop(["orange","Sunday","3"]);
fruitShop(["kiwi","Monday","2.5"]);
fruitShop(["grapes","Saturday","0.5"]);
fruitShop(["tomato","Monday","0.5"]);

//100/100;




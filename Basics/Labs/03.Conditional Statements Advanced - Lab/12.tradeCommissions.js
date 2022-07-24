function tradeCommison(input){
    const city = input[0];
    const sales = Number(input[1]);
    let commision=0;
    
    if (city === "Sofia"){
        if((sales>=0)&(sales<=500)){
            commision = sales*0.05;console.log(commision.toFixed(2));
        } else if((sales>500)&&(sales<=1000)){
            commision= sales*0.07;console.log(commision.toFixed(2));
        } else if((sales>1000)&&(sales<=10000)){
            commision= sales*0.08;console.log(commision.toFixed(2));
        } else if(sales>10000){
            commision= sales*0.12; console.log(commision.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (city === "Varna"){
        if((sales>=0)&(sales<=500)){
            commision = sales*0.045;console.log(commision.toFixed(2));
        } else if((sales>500)&&(sales<=1000)){
            commision=sales*0.075;console.log(commision.toFixed(2));
        } else if((sales>1000)&&(sales<=10000)){
            commision=sales*0.10;console.log(commision.toFixed(2));
        } else if(sales>10000){
            commision=sales*0.13;console.log(commision.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (city === "Plovdiv"){
        if((sales>=0)&(sales<=500)){
            commision = sales*0.055;console.log(commision.toFixed(2));
        } else if((sales>500)&&(sales<=1000)){
            commision=sales*0.08;console.log(commision.toFixed(2));
        } else if((sales>1000)&&(sales<=10000)){
            commision=sales*0.12;console.log(commision.toFixed(2));
        } else if(sales>10000){
            commision=sales*0.145;console.log(commision.toFixed(2)); 
        } else {
            console.log("error");
        }  
        } else {
    console.log("error");
   }
}

tradeCommison(["Sofia","1500"]);
tradeCommison(["Plovdiv","499.99"]);
tradeCommison(["Varna","3874.50"]);
tradeCommison(["Kaspichan","-50"]);
//100/100;


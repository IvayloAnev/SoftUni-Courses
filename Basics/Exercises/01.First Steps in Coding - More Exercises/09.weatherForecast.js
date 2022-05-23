function wheatherForecast (input){
const theDay = input[0];
if (theDay ===  "sunny" ){
    console.log(`${"It's warm outside!"}`);
}else{
    console.log(`${"It's cold outside!"}`);
}

}


wheatherForecast(["sunny"]);
wheatherForecast(["cloudy"]);
wheatherForecast(["snowy"]);
//100/100
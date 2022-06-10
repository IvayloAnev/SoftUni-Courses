function addAndSubtract(num1,num2,num3){

    function add(number1 , number2){
      return number1 + number2
    }
    let sum = add(num1,num2);
    
    function substract(sum,number3){
      return sum - number3
    }
    
    let finalResult = substract(sum,num3)
    console.log(finalResult)
    
    }
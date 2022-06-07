function solve(input){
    let num = input.toString();
    let l = num.length;
    let sum = 0;
    for(let i = 0 ; i < l ; i++){
       let tempNum = Number(num[i])
       sum+=tempNum;
       
    }
    console.log(sum);
    
    }
    solve(245678)
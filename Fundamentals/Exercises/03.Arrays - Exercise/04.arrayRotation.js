function solve(arr1,num){
  for (let i = 0 ; i < num  ; i++){
     let currNum = arr1.shift()
      arr1.push(currNum)
  }
  console.log(arr1.join(' '));

}


//10/100/

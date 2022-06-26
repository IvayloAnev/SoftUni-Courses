function solve(damages,num,type){
let n = Number(num)
let left = damages.splice(0,n).map(Number)
let entryPoint = Number(damages.shift())
let right = damages.map(Number)
let sumR = 0
let sumL = 0

for(let i = 0 ; i<= left.length-1 ; i++){
    if (type ===  "expensive"){
     if(left[i]>=entryPoint){
        sumL+=left[i]
     }
    }else{ 
    if(left[i]<entryPoint){
        sumL+=left[i]
    } 
    }
}
for(let j = 0 ; j <= right.length-1 ; j++){
    if (type ===  "expensive"){
        if(right[j]>=entryPoint){
        sumR+=right[j]
    }
      }else{
        if(right[j]<entryPoint)
        sumR+=right[j]
        
      }
}
//console.log(sumL)
//console.log(sumR)
if(sumL >= sumR){
console.log(`Left - ${sumL}`)
}else{
console.log(`Right - ${sumR}`)
}
}


solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    
    
    
    

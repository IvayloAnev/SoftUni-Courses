function solve(input){
let targets = input.shift().split(" ").map(x=>Number(x));
input.pop();
let shots = input.map(x=>Number(x));
console.log(shots)
let numberOfShots = 0;

for ( let i = 0 ; i < shots.length ; i++){
    let currentShot = shots[i];
    let currTarget = targets[currentShot];

    if (currTarget > -1){
        targets[currentShot]= -1;
        numberOfShots++;
        for(let j = 0 ; j < targets.length ; j++){
            if(targets[j]>-1){
                if(targets[j] > currTarget){
                    targets[j]-=currTarget;
                }else{
                    targets[j]+=currTarget;
                }
            }
        }
    }
}
console.log(`Shot targets: ${numberOfShots} -> ${targets.join(" ")}`);
}
solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
//100/100;
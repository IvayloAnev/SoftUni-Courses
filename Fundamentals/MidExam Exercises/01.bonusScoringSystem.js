function solve(input){
    let countOfStudents = Number(input.shift());
    let countOfLectures = Number(input.shift());
    let initialBonus = Number(input.shift());
    let attendances = input.map(x => Number(x));
    let maxBonus = 0;
    let maxAttendances = 0;
    
    for (let i = 0 ; i<input.length ; i++){
        let currAttendances = input[i];
        let totalBonus = currAttendances /countOfLectures * (5 + initialBonus);
        if(maxBonus < totalBonus){
            maxBonus = totalBonus;
            maxAttendances = currAttendances;
        }
    }
    maxBonus = Math.ceil(maxBonus);
console.log(`Max Bonus: ${maxBonus}.`);
console.log(`The student has attended ${maxAttendances} lectures.`)
}
solve(["5", "25", "30", "12", "19", "24", "16", "20"]);
solve([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
//100/100;
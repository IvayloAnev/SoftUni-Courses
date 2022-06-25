function solve(input) {
  let numberOfStudents = Number(input.shift());
  let numberOfLectures = Number(input.shift());
  let additionalBonus = Number(input.shift());
  let studentAttendaces = input.map(Number);
  let maxBonus = 0
  let maxAttendances = 0

 for(let i = 0 ; i<= studentAttendaces.length ; i++){
    let currAttendances = studentAttendaces[i]
    let bonus = currAttendances/numberOfLectures * (5 + additionalBonus)
    if(maxBonus < bonus){
        maxBonus = bonus
        maxAttendances = currAttendances
    }
 }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendances} lectures.`);
}
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )
  //100/100
  

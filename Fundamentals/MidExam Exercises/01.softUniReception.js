function solve(input) {
  let e1 = Number(input[0]);
  let e2 = Number(input[1]);
  let e3 = Number(input[2]);
  let students = Number(input[3]);
  let eficency = e1 + e2 + e3;
  let time = 0;

  while (students > 0) {
    time++;
    if (time % 4 != 0) {
      students -= eficency;
    }
  }
  console.log(`Time needed: ${time}h.`);
}
solve(["5", "6", "4", "20"]);
solve(["1", "2", "3", "45"]);
solve(["3", "2", "5", "40"]);

//100/100;

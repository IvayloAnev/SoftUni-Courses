function solve(n, k) {
  let result = [1];
  for (let i = 0; i < n - 1; i++) {
    let lastK = result.slice(-k);
    let sum = 0;
    for (let element of lastK) {
      sum += element;
    }
    result.push(sum);
    
  }
  console.log(result.join(` `));
}
solve(6, 3);
solve(8,2);

//1 1 2 4 7 13

//100/100

function solve(arr) {
  let sorted = arr.sort((a, b) => a.length - b.length);
  let newArr =[]
 sorted.sort((a,b)=>a.localeCompare(b))
   

  for (let element of sorted) {
     console.log(element);
}
}

solve(["Deny", "omen", "test", "Default"]);

// izhod: 
// test;
// Deny;
// omen;
// Default;

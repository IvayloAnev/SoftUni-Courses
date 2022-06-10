function nMatrix(input) {
  function rowGenerator(num) {
    let output = "";
    for (let i = 1; i <= num; i++) {
      output += `${input} `;
    }
    return output;
  }
  for (let i = 1; i <= input; i++) {
    console.log(rowGenerator(input));
  }
}
nMatrix(3)
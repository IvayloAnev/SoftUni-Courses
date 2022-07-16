function solve(str) {
  let line = str.split("\\");
  let file = line.pop();
  let word = file.split(".");
  let fileExt = word.pop();
  let fileName = word.join(".");
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExt}`);
}
//100/100;
solve("C:\\Internal\\training-internal\\Template.pptx");
console.log("..........");
solve("C:\\Projects\\Data-Structures\\Linked.List.cs");

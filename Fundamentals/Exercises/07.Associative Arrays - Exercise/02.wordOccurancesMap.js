function solve(input){
    let result = new Map()
    let words = input.split(' ')
    for (let word of words ){
        word = word.toLocaleLowerCase()
        if(result.has(word)){
            let oldValue = result.get(word)
            result.set(word,oldValue + 1)
        }else{
            result.set(word,1)
        }
    }
let filtred = Array
.from(result.entries())
.filter(([key,value])=> value % 2 === 1)
.map((entry)=> entry[0])
.join(" ")
console.log(filtred);
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
console.log(".........");
solve("Cake IS SWEET is Soft CAKE sweet Food");
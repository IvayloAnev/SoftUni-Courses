function AreOfFigures(input){
const type = input[0];
//square, rectangle, circle или triangle
if (type === "square"){
    const a = Number(input[1]);
    const result = a * a;
    console.log(result.toFixed(3));
} else if (type === "rectangle") {
    const a = Number(input[1]);
    const b = Number(input[2]);
    const result = a * b;
    console.log(result.toFixed(3));
} else if (type === "circle") {
    const a = Number(input[1]);
    const result =  Math.pow(a,2) * Math.PI;
    console.log(result.toFixed(3));
} else if (type === "triangle" ){
    const a = Number(input[1]);
    const h = Number(input[2]);
    const result =  a * h / 2;
    console.log(result.toFixed(3));
}

}

AreOfFigures(["square", "5"]);
AreOfFigures(["rectangle","7","2.5"]);
AreOfFigures(["circle","6"]);
AreOfFigures(["triangle","4.5","20"]);


function AreOfFigures(input){
    const type = input[0];
    let a = Number(input[1]);
    let result = '' ;
    if (type === "square"){
         result = a * a;
    } else if (type === "rectangle") {
        const b = Number(input[2]);
         result = a * b;
    } else if (type === "circle") {
         result =  Math.pow(a,2) * Math.PI;
    } else if (type === "triangle" ){
        const h = Number(input[2]);
        result =  a * h / 2;  
    }
    console.log(result.toFixed(3));
    }
    
    AreOfFigures(["square", "5"]);
    AreOfFigures(["rectangle","7","2.5"]);
    AreOfFigures(["circle","6"]);
    AreOfFigures(["triangle","4.5","20"]);

    //100/100
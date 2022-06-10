function addAndSubtract(char1,char2){
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);
    let smallerNumber = Math.min(start, end);
    let biggerNumber = Math.max(start, end);
    let result = [];

    for (i = smallerNumber + 1; i < biggerNumber; i++) {
      let currChart = String.fromCharCode(i);
      result.push(currChart);
    }

    console.log(result.join(" "));
    
    }
    addAndSubtract('a','d')
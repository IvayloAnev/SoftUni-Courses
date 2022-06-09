function solve(arr1,arr2){
    let array1 = arr1;
    let array2 = arr2;
    let array1L = array1.length;
    let newArray = [];
    
    for ( let i=0 ; i<array1L ; i++){
        let currNumArray1 = array1[i];
        let currNumArray2 = array2[i];
        let newArrayNum;
    
        if ( i%2 === 0 ){
        newArrayNum = Number(currNumArray1) + Number(currNumArray2);
    
         }else{
        
        newArrayNum = currNumArray1 + currNumArray2
    
        }
       
        newArray.push(newArrayNum);
    
       
    }
    console.log(newArray.join(` - `));
    
    }
    solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
    )

    //100/100;
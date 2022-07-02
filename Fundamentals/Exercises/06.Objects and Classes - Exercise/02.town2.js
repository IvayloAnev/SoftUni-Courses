function solve(input){
    let currTown = {}
    for (let element of input){
        let tokens = element.split('|')
        let tonwName = tokens[0]
        let townLatitude = Number(tokens[1].toFixed(2))
        let townLongitude = Number(tokens[2])
        currTown.name = tonwName
        currTown.latitude = townLatitude
        currTown.longtitude = townLongitude
        console.log(currTown);
    }

}
solve(['Sofia | 42.696552 | 23.32601',
       'Beijing | 39.913818 | 116.363625'])
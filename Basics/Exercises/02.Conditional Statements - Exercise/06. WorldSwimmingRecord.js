function worldRecord(input) {
    const  worldRecord = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeSecondsForOneMeter = Number(input[2]);
    const addedTime = Math.floor(distanceInMeters / 15) * 12.5 ;
    let totalTime =  timeSecondsForOneMeter * distanceInMeters + addedTime ;
    const diffrence = totalTime - worldRecord ;
    if ( totalTime < worldRecord ) {
    console.log(`Yes, he succeeded! The new world record is ${ totalTime.toFixed(2) } seconds.`);
    } else {
    console.log(`No, he failed! He was ${ diffrence.toFixed(2) } seconds slower.`)
    }
    }
    worldRecord(["10464","1500","20"]);
    worldRecord(["55555.67","3017","5.03"]);
    //17688.01 
    //100/100
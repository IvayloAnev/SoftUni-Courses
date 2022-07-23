function sleepyTomCat(input){
    const countNonWorkingDays = Number(input[0]);
    const hoursNonWorkingDays = countNonWorkingDays * 127;
    const hoursWorkingDays = ( 365 - countNonWorkingDays ) * 63;
    const totalHoursPlay = hoursNonWorkingDays + hoursWorkingDays;
    const limitHoursPlay = 30000 ;
    const difference = Math.abs( totalHoursPlay - limitHoursPlay ) ;
    const hours = Math.floor(difference / 60);
    const minutes = difference % 60 ;
    if ( totalHoursPlay >= limitHoursPlay ) {
    console.log("Tom will run away");
    console.log(`${hours} hours and ${ minutes } minutes more for play `);
    } else {
    console.log("Tom sleeps well");
    console.log(`${hours } hours and ${ minutes } minutes less for play`);
    }
    }
    sleepyTomCat(["20"]);
    sleepyTomCat(["113"]);
    //100/100
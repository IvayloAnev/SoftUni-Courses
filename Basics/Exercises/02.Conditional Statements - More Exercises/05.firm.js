function firm(input){
    const neededHours = Number(input[0]);
    const countDays = Number(input[1]);
    const workerExtraTime = Number(input[2]);
    const countDays10 = countDays * 0.9;
    const workingHours = countDays10 * 8;
    const extraWorkingHours = workerExtraTime * countDays * 2; 
    const totalWorkingHours = Math.floor(workingHours + extraWorkingHours);
    const difference = Math.abs( totalWorkingHours - neededHours ) ;
    if ( neededHours <=  totalWorkingHours ) {
    console.log(`Yes!${ difference} hours left.`);
    } else {
    console.log(`Not enough time!${ difference } hours needed.`);
    }
    }
    firm([90,7,3]);
    firm([99,3,1]);

    //100/100;
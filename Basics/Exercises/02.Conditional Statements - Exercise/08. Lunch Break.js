function luchBreak(input) {
    const nameOfSeries = input[0];
    const durationSeries = Number(input[1]);
    const durationLunchBreak = Number(input[2]);
    const durationEat = durationLunchBreak / 8;
    const durationRelax = durationLunchBreak / 4;
    const timeLeft = durationLunchBreak - ( durationEat + durationRelax );
    const difference = Math.abs( durationLunchBreak - ( durationEat + durationRelax + durationSeries));
    if ( timeLeft >= durationSeries ) {
    console.log(`You have enough time to watch ${ nameOfSeries } and left with ${Math.ceil(difference)} minutes free time. `) ;
    } else {
    console.log(`You don't have enough time to watch ${ nameOfSeries }, you need ${Math.ceil(difference)} more minutes.`)
    }
    }
    luchBreak(["Game of Thrones","60","96"]);
    luchBreak(["Teen Wolf","48","60"]);
    //100/100;

function depositCalculator(input) {
    const depositSum = Number(input[0]);
    const period = Number(input[1]);
    const precent = Number(input[2]);
    const interest = (depositSum * precent) / 100;
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    const interestPerMonth = interest / 12;
    const totalSum = depositSum + period * interestPerMonth;
    console.log(totalSum);

}

depositCalculator(["200","3","5.7"]);
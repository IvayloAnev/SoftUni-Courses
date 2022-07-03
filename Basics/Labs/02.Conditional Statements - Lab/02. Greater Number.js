function greaterNumber (input) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

greaterNumber (["5","3"]);
greaterNumber (["3", "5"]);
greaterNumber (["10", "10"]);
greaterNumber (["-5", "5"]);

//100/100
function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    // Да се напише функция, която получава час и минути от 24-часово
    //  денонощие и изчислява колко ще е часът след 15 минути. Резултатът 
    //  да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23,
    //   а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. 
    //   Минутите се изписват винаги с по две цифри, с водеща нула,
    //  когато е необходимо. 
    minutes += 15;
    if (minutes >= 60) {
        hours += 1;
        minutes -= 60;
    }
    if (hours >= 24){
        hours = 0;
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
timeMinutes(["1", "46"]);
timeMinutes(["0", "01"]);
timeMinutes(["23", "59"]);
timeMinutes(["11", "08"]);
timeMinutes(["12", "49"]);

//100/100
function concatenateData(input){
const name = input[0];
const lastName = input[1];
const age = Number(input[2]);
const city = input[3];
console.log(`You are ${name} ${lastName}, a ${age}-years old person from ${city}.`);

}

concatenateData(['Maria' , 'Ivanova' , 20 , 'Sofia']);

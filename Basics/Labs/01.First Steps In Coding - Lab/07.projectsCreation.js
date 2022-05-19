function projectsCreation(input){
const name = input[0];
const amountOfProjects = Number(input[1]);
const neededHours = amountOfProjects * 3;
console.log(`The architect ${name} will need ${neededHours} hours to complete ${amountOfProjects} project/s.`);
}

projectsCreation(["George","4"])
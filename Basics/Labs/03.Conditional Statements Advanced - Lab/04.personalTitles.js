function personalTitkes(input) {
    const age = Number(input[0]);
    const gender = input[1];
    if (age < 16){
      if(gender === "f"){ 
          console.log("Miss");
      }else {
          console.log("Master");
      }
    } else {
        if(gender === "f"){
            console.log("Ms.");
        }else {
            console.log("Mr.");
    }
}
}
personalTitkes(["12","f"]);
personalTitkes(["17","m"]);
personalTitkes(["25","f"]);
personalTitkes(["13.5","m"])
//100/100;

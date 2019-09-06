
const country = "France";
const capital = "Paris";
const population = 67;

let msg = "The population of " + country + " is " + population + " million";
console.log(msg);
msg = capital + " is the capital of " + country ;
console.log(msg);
msg += " and has " + population + "mil people";
console.log(msg);

msg = `The population of ${country} is ${population} million`;
console.log(msg);
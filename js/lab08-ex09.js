/* add code below this */

const age = 65;
const age2 = "65";

if (age == 65) {
    console.log("you are eligible for retirement");
} else  {
    console.log("you are too young for retirement");
}

if (age == age2) console.log("these are the same");

if (age === age2) console.log("these shouldnt be triple equal");

let userAge = prompt("What is your age?");
let status = (userAge >= 65) ? 'You can be retired' : 'You keep working';
console.log(status);
/* add code below this */

const days = new Array("Mon","Tues","Wed","Thur","Fri");
const months = ['jan','feb','mar'];
const years = [];
years[0]=1999;
years[1]=2000;

console.log(days);
console.log(months);
console.log(years);

console.log(months.length);
days.push("Sat");
days.unshift("Sun");
console.log(days);
months.pop();
console.log(months);

for (let i=0; i < days.length; i++) {
    console.log('index=' + i + ' value=' + days[i])
}
//console.log(i);

for (let mon of months) {
    console.log(mon);
}




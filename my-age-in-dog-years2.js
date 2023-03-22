var myAge = 48;
//my current age
var earlyYears=2;
//some variable that will change later on
earlyYears *= 10.5;
//multiplied the value saved to earlyYears
let laterYears = myAge - 2;
//we already accounted for the first two years
laterYears *= 4;
//calculated the number of dog years accounted for by your later years
console.log('Early years: ' + earlyYears);
console.log('Later years: ' + laterYears);
let myAgeInDogYears = (earlyYears + laterYears);
console.log('My age in Dog Years: ' + myAgeInDogYears);
//my name here
var myName='Roman';
var myAge = 48;
//printing final result with a sentance
console.log(`My name is ${myName}. I am ${myAge} years old, which is ${myAgeInDogYears} years old in dog years.`);
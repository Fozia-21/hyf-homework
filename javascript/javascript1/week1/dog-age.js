const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultsInDogYears = false;//Assigning boolean value to the variable

console.log(`Your dog will be ${dogYear} human years old in 2027.`);

shouldShowResultsInDogYears = true;//Assigning boolean value to the variable
dogYear *= 7;

console.log(`Your dog will be ${dogYear} dog years old in 2027.`);

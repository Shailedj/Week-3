/*
Basic Types activity
- Create 3 variables and set them up to the given instructions. Also, type check them with the typeof operator in the console.
*/
//your code here
var myFirstName = 'shailedj'
var numberOfCities = 2
var havingFun = 'true'
///////////////////////////////////
//check results in browser console
console.log('myFirstName: ', myFirstName);
console.log(typeof(myFirstName));

console.log('numberOfCities: ', numberOfCities);
console.log(typeof(numberOfCities));

console.log('havingFun: ', havingFun);
console.log(typeof(havingFun));
// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { myFirstName, numberOfCities, havingFun };
}

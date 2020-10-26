// PROGRAM-NAME : leap year !
// By Lekshmi Priya
// PROGRAM-CODE :

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
let year = prompt('Enter a year:');

checkLeapYear(year);
// Temperature Checker:
// Write a JavaScript program that prompts the user to enter the current temperature in Celsius. If the temperature is above 30 degrees Celsius,
//  display "It's too hot!", if it's between 20
// and 30 degrees Celsius, display "The weather is just perfect!",
//  and if it's below 20 degrees Celsius, display "It's a bit chilly."

let tempString = prompt("What's the temperature in Celsius?");
// Convert the input to a number
let temp = parseFloat(tempString);

// Check if the input is a valid number
if (!isNaN(temp)) {
    // Check if the temperature is within a reasonable range
    if (temp > 30) {
        console.log("It's too hot!");
    } else if (temp > 20) {
        console.log("The weather is just perfect!");
    } else {
        console.log("It's a bit chilly.");
    }
} else {
    // Handle invalid input
    console.log("Invalid input. Please enter a valid temperature.");
}

// Leap Year Checker:
// Develop a JavaScript program that prompts the user to enter a year.
// Check whether the entered year is a leap year or not. Display "Leap year!"
//  if it is, and "Not a leap year!" if it's not. A leap year is divisible by 4,
//   but not by 100 unless it's also divisible by 400.



if(!isNaN(year)){
    if (year%4==0 ){

    }
    else{
        console.log("Not a leap year!");
    }
}
else{
    console.log("enter correct value");
}
// Prompt the user to enter a year
let yearString = prompt("Enter a year:");

// Convert the input to a number
let year = parseInt(yearString);

// Check if the input is a valid number
if (!isNaN(year)) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year!");
    } else {
        console.log(year + " is not a leap year!");
    }
} else {
    // Handle invalid input
    console.log("Invalid input. Please enter a valid year.");
}

// Write a JavaScript program that
// prompts the user to enter a number between 1 and 12 representing a
// month. Use a switch statement to display the corresponding month name.
// Prompt the user to enter a number between 1 and 12 representing a month


let monthNumber = parseInt(prompt("Enter a number between 1 and 12 representing a month:"));

// Use a switch statement to display the corresponding month name
let monthName;
switch(monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Invalid month number";
        break;
}

// Display the corresponding month name
console.log(monthName);

// Develop a JavaScript program that prompts the user to choose an item from a menu (e.g., Burger, Pizza, Salad). Use a switch
//  statement to display the corresponding price of the selected item. Handle cases where the item is not available in the menu.

let menu = prompt("enter the product name what you want pizza,burger,icecream");

let price;
switch (menu.toLowerCase()) {
  case "pizza":
    price = 344;
    break;
  case "burger":
    price = 230;
    break;
  case "icecream":
    price = "free";
    break;
  default:
    price = "choose correct item";
    break;
}
console.log(price);

var g = "HelloWorld";
var h="jai shree ram";

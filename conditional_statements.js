// 1. Write a program that checks if a number is positive, negative, or zero.

let num = -5;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 2. Using an if-else statement, determine whether a given integer is even or odd.

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. Write a program that takes two numbers and prints the larger one using conditional statements.

let num1 = 15;
let num2 = 10;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// 4. Using if-else-if, assign grades (A, B, C, D, F) based on a student’s percentage score.

let percentage = 85;

if (percentage >= 90) {
  console.log("A");
} else if (percentage >= 80) {
  console.log("B");
} else if (percentage >= 70) {
  console.log("C");
} else if (percentage >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 5. Write a program that checks if a given year is a leap year using conditional statements.

let year = 2024;

if (year % 400 === 0) {
  console.log("Leap Year");
} else if (year % 100 === 0) {
  console.log("Not a Leap Year");
} else if (year % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// 6. Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, … 7 = Sunday).

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 7. Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.

let firstNumber = 20;
let secondNumber = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(firstNumber + secondNumber);
    break;
  case "-":
    console.log(firstNumber - secondNumber);
    break;
  case "*":
    console.log(firstNumber * secondNumber);
    break;
  case "/":
    console.log(firstNumber / secondNumber);
    break;
  default:
    console.log("Invalid operator");
}

// 8. Write a program that checks whether a given character is a vowel or consonant using switch-case.

let letter = "a";

switch (letter.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}

// 9. Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).

let color = "Red";

switch (color.toLowerCase()) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

// 10. Write a program using switch-case where the user selects from a menu (e.g., 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).

let choice = 2;

switch (choice) {
  case 1:
    console.log("Check Balance");
    break;
  case 2:
    console.log("Deposit");
    break;
  case 3:
    console.log("Withdraw");
    break;
  case 4:
    console.log("Exit");
    break;
  default:
    console.log("Invalid choice");
}

// 1. Write a program using a for loop to print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use a while loop to calculate the sum of the first N natural numbers.

let n = 10;
let sum = 0;
let i = 1;

while (i <= n) {
  sum = sum + i;
  i++;
}

console.log(sum);

// 3. Print the multiplication table of a given number using a for loop.

let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}

// 4. Write a program using a while loop to find the factorial of a given number.

let factorialNumber = 5;
let factorial = 1;

while (factorialNumber > 0) {
  factorial = factorial * factorialNumber;
  factorialNumber--;
}

console.log(factorial);

// 5. Print numbers from 10 down to 1 using a for loop.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 6. Use a do-while loop to print all even numbers up to N.

let limit = 20;
let numberToCheck = 1;

do {
  if (numberToCheck % 2 === 0) {
    console.log(numberToCheck);
  }

  numberToCheck++;
} while (numberToCheck <= limit);

// 7. Write a program using a while loop to calculate the sum of digits of a given number.

let digitNumber = 12345;
let digitSum = 0;

while (digitNumber > 0) {
  digitSum = digitSum + (digitNumber % 10);
  digitNumber = Math.floor(digitNumber / 10);
}

console.log(digitSum);

// 8. Generate the first 10 terms of the Fibonacci series using a for loop.

let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
  console.log(a);

  let next = a + b;
  a = b;
  b = next;
}

// 9. Use a do-while loop to keep asking the user for a number until they guess the correct one.

let correctNumber = 7;
let guess;

do {
  guess = 7;
} while (guess !== correctNumber);

console.log("Correct!");

// 10. Write a program using a for loop to check if a given number is prime.

let primeNumber = 17;
let isPrime = true;

if (primeNumber <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}

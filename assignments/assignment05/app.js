// Assignment 5 - Practice JS Coding Exercise Problems
"use strict";

/* 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. */
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

document.getElementById("result1").innerText = max(3, 6);

/* 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}

document.getElementById("result2").innerText = maxOfThree(3, 6, 9);

/* 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */
function isVowel(c) {
  var vowels = "aeiou";

  if (vowels.includes(c)) {
    return true;
  }

  return false;
}

document.getElementById("result3").innerText = isVowel("u");

/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop). */
function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function multiply(arr) {
  let total = 1;

  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }

  return total;
}

document.getElementById("result4").innerText =
  sum([1, 2, 3, 4]) + ", " + multiply([1, 2, 3, 4]);

/* 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". */
function reverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

document.getElementById("result5").innerText = reverse("jag testar");

/* 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */
function findLongestWord(arr) {
  let longest = 0;
  let n = arr.length - 1;
  while (n >= 0) {
    if (longest < arr[n].length) longest = arr[n].length;
    n--;
  }

  return longest;
}

document.getElementById("result6").innerText = findLongestWord([
  "javascript",
  "html",
  "css",
  "ecmascript",
  "web application",
]);

/* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters. */
function filterLongWords(arr, i) {
  return arr.filter((word) => word.length > i);
}

document.getElementById("result7").innerText = filterLongWords(
  ["javascript", "html", "css", "ecmascript", "web application"],
  6
);

/* 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 + 3^2 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */
function computeSumOfSquares(arr) {
  return arr.map((val) => val * val).reduce((val1, val2) => val1 + val2);
}

document.getElementById("result8").innerText = computeSumOfSquares([1, 2, 3]);

/* 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd. */
function printOddNumbersOnly(arr) {
  return arr.filter((number) => number % 2 !== 0);
}

document.getElementById("result9").innerText = printOddNumbersOnly([4, 5, 6]);

/* 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 + 4^2 = 20. */
function computeSumOfSquaresOfEvensOnly(arr) {
  return arr
    .map((val) => val * val)
    .filter((number) => number % 2 === 0)
    .reduce((val1, val2) => val1 + val2);
}

document.getElementById("result10").innerText = computeSumOfSquaresOfEvensOnly([
  1, 2, 3, 4, 5,
]);

/* 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */
function sum1(arr) {
  return arr.reduce((val1, val2) => val1 + val2);
}

function multiply1(arr) {
  return arr.reduce((val1, val2) => val1 * val2);
}

document.getElementById("result11").innerText =
  sum1([1, 2, 3, 4]) + ", " + multiply1([1, 2, 3, 4]);

/* 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!) */
function findSecondBiggest(arr) {
  var second = -Infinity,
    max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else {
      if (arr[i] > second) second = arr[i];
    }
  }

  return second;
}

document.getElementById("result12").innerText =
  findSecondBiggest([1, 2, 3, 4, 5]) +
  ", " +
  findSecondBiggest([19, 9, 11, 0, 12]);

/* 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output). */
function printFibo(n, a, b) {
  var val1 = a,
    val2 = b;
  var str = "";
  for (let i = 1; i <= n; i++) {
    str += val1 + ", ";
    let tmp = val1 + val2;
    val1 = val2;
    val2 = tmp;
  }

  return str.substring(0, str.length - 2);
}

document.getElementById("result13_1").innerText = printFibo(1, 0, 1);
document.getElementById("result13_2").innerText = printFibo(2, 0, 1);
document.getElementById("result13_3").innerText = printFibo(3, 0, 1);
document.getElementById("result13_4").innerText = printFibo(6, 0, 1);
document.getElementById("result13_5").innerText = printFibo(10, 0, 1);

/* 14. Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:
a. Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
b. New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window. */
function loginSubmit() {
  const url = document.getElementById("url");
  const email = document.getElementById("email");
  console.log("URL: " + url.value);
  console.log("Email: " + email.value);
  document.getElementById("result14_1").innerText = "URL: " + url.value;
  document.getElementById("result14_2").innerText = "Email: " + email.value;
}

function addProduct() {
  const productNo = document.getElementById("productNo");
  const name = document.getElementById("name");
  const price = document.getElementById("price");
  const quantity = document.getElementById("quantity");
  const supplier = document.getElementById("supplier");
  const date = document.getElementById("date");

  alert(
    "Product number: " +
      productNo.value +
      "\n" +
      "Name: " +
      name.value +
      "\n" +
      "Unit price: " +
      price.value +
      "\n" +
      "Quantity: " +
      quantity.value +
      "\n" +
      "Supplier: " +
      supplier.value +
      "\n" +
      "Date: " +
      date.value
  );

  document.getElementById("result14_3").innerText =
    "Product number: " + productNo.value;
  document.getElementById("result14_4").innerText = "Name: " + name.value;
  document.getElementById("result14_5").innerText =
    "Unit price: " + price.value;
  document.getElementById("result14_6").innerText =
    "Quantity: " + quantity.value;
  document.getElementById("result14_7").innerText =
    "Supplier: " + supplier.value;
  document.getElementById("result14_8").innerText = "Date: " + date.value;
}

/* 15. Using JavaScript and HTML and CSS, implement a webpage that displays a working, ticking counter Clock, that counts/displays the current Date and time of the browser host, in the format: 2019-11-4 12:16:01. */
function clock() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let second = currentDate.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let fullClock =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

  document.getElementById("clock").innerText = fullClock;
  setTimeout(clock, 1000);
}

clock();

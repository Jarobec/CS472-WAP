/* Midterm Exam - Part 2 - Question 10 */
/* Author: Jargal Ganbaatar */
/* WAP, Exam, Midterm, CS472 */

"use strict";

const findFirstN = function (n, a) {
  if (n >= a.length) {
    console.log("Error: Insufficient items");
  } else {
    return a.filter((value, index, array) => index < n);
  }
};
var a = [1, 3, 6, 2];
a = findFirstN(3, a); // expected result: [1,3,6]
console.log(a);
findFirstN(3, a); // expected result: Error: Insufficient items

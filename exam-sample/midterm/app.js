/* Midterm Exam Preparation */
/* Author: Jargal Ganbaatar */
/* WAP, Exam, Midterm, CS472 */

"use strict";

const eye = [];
for (let i = 0; i <= 5; i++) {
  eye[i] = function () {
    return i * 3;
  };
}
console.log(eye[0]());
console.log(eye[1]());
console.log(eye[4]());

// Assignment 10 - ES6 Classes and ES Modules
// main.js
"use strict";

/* Question 1 */
console.log("---------- Question 1 ----------");
import { Person } from "./model/person.js";

const persons = [];
persons.push(new Person("Ana Smith", new Date(1998, 11, 15)));
persons.push(new Person("Bob Jone", new Date(1945, 10, 16)));
persons.push(new Person("Carlos Slim Helu", new Date(1976, 8, 24)));

// print out to the console.
persons.forEach((person) => {
  console.log(person.toString());
});

/* Question 2 */
console.log("---------- Question 2 ----------");
import Employee from "./model/employee.js";
const jim = new Employee(
  "Jim Hanson",
  new Date(1985, 11, 15),
  245990.0,
  new Date(2022, 2, 9)
);

// print out to the console.
console.log(jim.doJob("Software Engineer"));

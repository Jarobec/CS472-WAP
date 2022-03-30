// Assignment 9 - Using Inheritance
"use strict";

/* 1. Define a JavaScript object literal named, person, with the following specification:
  a. Person object should have the properties:
       i. name (initialize this with empty string value)
      ii. dateOfBirth (initialize this with empty string value or null)
  b. Person object should have the methods:
       i. getName (should return the value of the person’s name property)
      ii. setName (should take as input parameter, a String value which it sets as the person’s name)
Given that someone named John IS-A person, applying JavaScript inheritance and the Object.create(…) method, create an object named, john, whose name property is set to the string, “John” and whose dateOfBirth property is set to the date, December 10th, 1998.

Print-out to the console, the information about the person named John, in the following format:
“The person’s name is John”
“John was born on 1998-12-10” */
console.log("---------- Question 1 ----------");
const person = {
  name: "",
  dateOfBirth: null,
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  },
  // toString: function () {
  //   return (
  //     "{Name: " +
  //     this.name +
  //     ", DateOfBirth: " +
  //     this.dateOfBirth.getFullYear() +
  //     "-" +
  //     (this.dateOfBirth.getMonth() + 1) +
  //     "-" +
  //     this.dateOfBirth.getDate() +
  //     "}"
  //   );
  // },
};

const john = Object.create(person, {
  name: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "John",
  },
  dateOfBirth: {
    value: new Date(1998, 11, 10),
  },
});

console.log("The person's name is " + john.getName());
console.log(
  john.getName() +
    " was born on " +
    john.dateOfBirth.getFullYear() +
    "-" +
    (john.dateOfBirth.getMonth() + 1) +
    "-" +
    john.dateOfBirth.getDate()
);

/* 2. Given that an Employee IS-A person, applying JavaScript inheritance and the Object.create(…) method, create a generic object named, employee, with the following properties:
  a. Salary (initialize this with the value zero dollars
  b. hireDate (initialize this with the current date of today)
and the following method:

  c. doJob (should take as input parameter, a string representing the jobTitle of the employee and it prints-out to the console, the employee’s information in the following format:

  “[Employee’s name] is a [jobTitle] who earns $[salary]”
  e.g. Anna is a Programmer who earns $249,995.50

Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, passing it the jobtitle, Programmer.

Note the console output should be: Anna is a Programmer who earns $249,995.50 */
console.log("---------- Question 2 ----------");
const employee = Object.create(person, {
  salary: { writable: true, configurable: true, enumerable: true, value: 0 },
  hireDate: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: new Date(),
  },
  doJob: {
    value: function (jobTitle) {
      return (
        this.name +
        " is a " +
        jobTitle +
        " who earns " +
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(this.salary)
      );
    },
  },
});

const anna = employee;
anna.setName("Anna");
anna.salary = 249995.5;
console.log(anna.doJob("Programmer"));

/* 3. Re-write the person object specification described in Question 1 above, but this time, using a Constructor Function named, Person. Then, add a method named, toString() to the person object, which return the string representation of the person object data in the format:

{Name: John, DateOfBirth: 1998-12-10}

Using your constructor function for the person object, create a person named, Peter, whose date of birth is November 10, 1985.

Print-out to the console, the information for the person named, Peter, using its toString() method. */
console.log("---------- Question 3 ----------");
// function Person(name, dateOfBirth) {
//   this.name = name;
//   this.dateOfBirth = dateOfBirth;
// }
function Person() {}
person.toString = function () {
  return (
    "{Name: " +
    this.name +
    ", DateOfBirth: " +
    this.dateOfBirth.getFullYear() +
    "-" +
    (this.dateOfBirth.getMonth() + 1) +
    "-" +
    this.dateOfBirth.getDate() +
    "}"
  );
};
Person.prototype = person;

const peter = new Person();
peter.setName("Peter");
peter.dateOfBirth = new Date(1985, 10, 10);
console.log(peter.toString());

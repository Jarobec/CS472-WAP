// Assignment 10 - ES6 Classes and ES Modules
// person.js
"use strict";

/* 1. Create a new webapp folder and in it create a js sub-folder and a model sub-sub-folder inside the js sub-folder. Inside the model sub-sub-folder, create a ‘person.js’ Javascript source code file and in it, Define a JavaScript ES6 class named, Person, with the following specification:
  a. Person class should have the properties:
       i. name
      ii. dateOfBirth
  b. Person class should have the methods:
        i. getName (should return the value of the person’s name property)
       ii. setName (should take as input parameter, a String value which it sets as the person’s name)
      iii. getDateOfBirth
       iv. getDateOfBirth
  c. Include a toString() method which returns the Person data in the format,
    { Name: Ana Smith, DateOfBirth: 1998-12-15 }

Note: dateOfBirth will be set to a Date() object NOT a string.

Inside the js sub-folder of your webapp folder, create another JS source file named, main.js. In the main.js file, write code to import your Person class. Then declare and initialize an array of Persons, with he following data:
  a. Name: Ana Smith, Date of Birth: 1998-12-15
  b. Name: Bob Jone, Date of Birth: 1945-11-16
  c. Name: Carlos Slim Helu, Date of Birth: 1976-09-24

Iterate through the array and Print-out to the console, the information about the persons using the toString() method you defined.
 */
export class Person {
  constructor(name, dateOfBirth) {
    this._name = name;
    this._dateOfBirth = dateOfBirth;
  }

  getName() {
    return this._name;
  }

  setName(newName) {
    this._name = newName;
  }

  getDateOfBirth() {
    return this._dateOfBirth;
  }

  setDateOfBirth(newDateOfBirth) {
    this._dateOfBirth = newDateOfBirth;
  }

  toString() {
    const year = this._dateOfBirth.getFullYear();
    const month = this._dateOfBirth.getMonth() + 1;
    const day = this._dateOfBirth.getDate();

    return `{ Name: ${this._name}, DateOfBirth: ${year}-${
      month < 10 ? "0" : ""
    }${month}-${day < 10 ? "0" : ""}${day} }`;
  }
}

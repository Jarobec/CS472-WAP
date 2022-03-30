// Assignment 8 - Objects and Modules
"use strict";

/* 6. Consider the following definition of an add() function to increment a counter variable: */
var count = (function () {
  var counter = 0;

  var add = function () {
    return (counter += 1);
  };
  var reset = function () {
    return (counter = 0);
  };
  return {
    add: add,
    reset: reset,
  };
})();

/*  8. To add() function defined in question 6 always adds 1 to the counter each time it is called. Write a definition of a function make_adder(inc), whose return value is an add function with increment value inc (instead of 1). Here is an example of using this function: */
var make_adder = function (inc) {
  var counter = 0;

  add = function (value) {
    return (counter += value);
  };
  reset = function () {
    return (counter = 0);
  };
  return {
    add: function () {
      return add(inc);
    },
    reset: reset,
  };
};

var add5 = make_adder(5);
console.log(add5.add());
console.log(add5.add());
console.log(add5.add()); // final counter value is 15

var add7 = make_adder(7);
console.log(add7.add());
console.log(add7.add());
console.log(add7.add()); // final counter value is 21

/* 10. Using the Revealing Module Pattern, write a Javascript definition of a Module that creates an Employee Object with the following fields and methods: */
var employee = (function () {
  var name, age, salary;

  var getName = function () {
    return name;
  };

  // private
  var setName = function (newName) {
    name = newName;
  };

  var getAge = function () {
    return age;
  };

  // private
  var setAge = function (newAge) {
    age = newAge;
  };

  var getSalary = function () {
    return salary;
  };

  // private
  var setSalary = function (newSalary) {
    salary = newSalary;
  };

  var incrementAge = function () {
    setAge(getAge() + 1);
    return getAge();
  };

  var increaseSalary = function (percentage) {
    var tmpSalary = getSalary();
    setSalary(tmpSalary + tmpSalary * (percentage / 100));
    return getSalary();
  };

  var toString = function () {
    return getName() + " " + getAge() + " " + getSalary();
  };

  return {
    setName: setName,
    setAge: setAge,
    setSalary: setSalary,
    incrementAge: incrementAge,
    increaseSalary: increaseSalary,
    toString: toString,
  };
})();

employee.setName("Jargal");
employee.setAge(29);
employee.setSalary(300000);
employee.incrementAge();
employee.increaseSalary(30);
console.log(employee.toString());

/* 11. Write a few Javascript instructions to extend the Module of Question 10 to have a public address field and public methods setAddress(newAddress) and getAddress(). */
employee.address = "";
employee.setAddress = (newAddress) => {
  address = newAddress;
};
employee.getAddress = () => {
  return address;
};

employee.setAddress("Fairfield, IA 52557");
console.log(employee.getAddress());

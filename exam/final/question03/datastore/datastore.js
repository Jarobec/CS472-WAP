/**
 * datastore.js
 *
 * @author Jargal Ganbaatar
 * @since 2022-03-17
 */
"use strict";

const dataStore = (function () {
  const registrationData = [
    {
      studentId: "000-11-0001",
      fullName: "Anna Lynn Smith",
      levelOfStudy: "Graduate",
    },
    {
      studentId: "000-11-0002",
      fullName: "Bob K. Jones",
      levelOfStudy: "Undergraduate",
    },
  ];

  const getData = function () {
    return registrationData;
  };

  const addData = function (newStudent) {
    console.log(newStudent);
    registrationData.push(newStudent);
    return true;
  };

  return {
    getData: getData,
    addData: addData,
  };
})();

module.exports = dataStore;

// Assignment 11 - The DOM and Event-handling
// patient.js
"use strict";

export default class Patient {
  #patientID = null;
  #firstName = null;
  #middleName = null;
  #lastName = null;
  #dateOfBirth = null;
  #department = null;
  #outPatient = null;

  constructor(
    patientID,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    department,
    outPatient
  ) {
    this.#patientID = patientID;
    this.#firstName = firstName;
    this.#middleName = middleName;
    this.#lastName = lastName;
    this.#dateOfBirth = dateOfBirth;
    this.#department = department;
    this.#outPatient = outPatient;
  }

  getPatientID() {
    return this.#patientID;
  }

  getFirstName() {
    return this.#firstName;
  }

  getMiddleName() {
    return this.#middleName;
  }

  getLastName() {
    return this.#lastName;
  }

  getDateOfBirth() {
    return this.#dateOfBirth;
  }

  getAge() {
    const currDate = new Date();
    const diffDate = currDate.getTime() - this.#dateOfBirth.getTime();

    return Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365.25));
  }

  getDepartment() {
    return this.#department;
  }

  getOutPatient() {
    return this.#outPatient;
  }

  setPatientID(patientID) {
    this.#patientID = patientID;
  }

  setFirstName(firstName) {
    this.#firstName = firstName;
  }

  setMiddleName(middleName) {
    this.#middleName = middleName;
  }

  setLastName(lastName) {
    this.#lastName = lastName;
  }

  setDateOfBirth(dateOfBirth) {
    this.#dateOfBirth = dateOfBirth;
  }

  setDepartment(department) {
    this.#department = department;
  }

  setOutPatient(outPatient) {
    this.#outPatient = outPatient;
  }

  toString() {
    return `{ PatientID: ${this.#patientID}, FirstName: ${
      this.#firstName
    }, MiddleName: ${this.#middleName}, LastName: ${
      this.#lastName
    }, DateOfBirth: ${this.#dateOfBirth}, Department: ${
      this.#department
    }, OutPatient: ${this.#outPatient} }`;
  }
}

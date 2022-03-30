// Assignment 11 - The DOM and Event-handling
// app.js
"use strict";

import Patient from "./model/patient.js";

$(document).ready(function () {
  const patients = [];

  // Register patient
  // submit button
  $("#formRegisterPatient").submit(function (event) {
    event.preventDefault();

    const patientID = $("#patientID").val();
    const firstName = $("#firstName").val();
    const middleName = $("#middleName").val();
    const lastName = $("#lastName").val();
    const dateOfBirth = new Date($("#dateOfBirth").val());
    const department = $("#department").val();
    const outPatient = $("[name='outPatient']:checked").val();

    const patient = new Patient(
      patientID,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      department,
      outPatient
    );
    patients.push(patient);
    console.log(patient.toString());
    registerPatient(patient);

    $("#patientID").val("");
    $("#firstName").val("");
    $("#middleName").val("");
    $("#lastName").val("");
    $("#dateOfBirth").val("");
    $("#department option:eq(0)").prop("selected", true);
    $("[name='outPatient']").prop("checked", false);

    alert("Patient created");
  });

  // Show Elderly Patients only
  // An Elderly Patient is any patient who is of age, 65 or older.
  $("#showElderly").on("click", function (event) {
    if (patients.length > 0) {
      console.log("Show Elderly Patients only");

      $("#tbPatients > tbody").empty();
      let data = [];

      // Checking "Show Out-Patients only checkbox" is checked?
      if ($("#showOut").prop("checked")) {
        data = patients.filter((patient) => patient.getOutPatient() === "Yes");
      } else {
        data = patients;
      }

      // Checking "Show Elderly Patients only checkbox" is checked?
      if ($("#showElderly").prop("checked")) {
        data = data.filter((patient) => patient.getAge() > 64);
      }

      data.forEach((patient) => registerPatient(patient));
    }
  });

  // Show Out-Patients only
  $("#showOut").on("click", function (event) {
    if (patients.length > 0) {
      console.log("Show Out-Patients only");

      $("#tbPatients > tbody").empty();
      let data = [];

      // Checking "Show Elderly Patients only checkbox" is checked?
      if ($("#showElderly").prop("checked")) {
        data = patients.filter((patient) => patient.getAge() > 64);
      } else data = patients;

      // Checking "Show Out-Patients only checkbox" is checked?
      if ($("#showOut").prop("checked")) {
        data = data.filter((patient) => patient.getOutPatient() === "Yes");
      }

      data.forEach((patient) => registerPatient(patient));
    }
  });

  // add new patient to table
  function registerPatient(patient) {
    const tbPatients = document.querySelector("#tbPatients > tbody");
    const newRow = tbPatients.insertRow(-1);

    const newCellPatientID = newRow.insertCell(0);
    const strNewRowPatientID = document.createTextNode(
      `${patient.getPatientID()}`
    );
    newCellPatientID.appendChild(strNewRowPatientID);

    const newCellFirstName = newRow.insertCell(1);
    const strNewRowFirstName = document.createTextNode(
      `${patient.getFirstName()}`
    );
    newCellFirstName.appendChild(strNewRowFirstName);

    const newCellMiddleName = newRow.insertCell(2);
    const strNewRowMiddleName = document.createTextNode(
      `${patient.getMiddleName()}`
    );
    newCellMiddleName.appendChild(strNewRowMiddleName);

    const newCellLastName = newRow.insertCell(3);
    const strNewRowLastName = document.createTextNode(
      `${patient.getLastName()}`
    );
    newCellLastName.appendChild(strNewRowLastName);

    const newCellDateOfBirth = newRow.insertCell(4);
    const strNewRowDateOfBirth = document.createTextNode(
      `${new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
      }).format(patient.getDateOfBirth())}`
    );
    newCellDateOfBirth.appendChild(strNewRowDateOfBirth);

    const newCellDepartment = newRow.insertCell(5);
    const strNewRowDepartment = document.createTextNode(
      `${patient.getDepartment()}`
    );
    newCellDepartment.appendChild(strNewRowDepartment);

    const newCellOutPatient = newRow.insertCell(6);
    const strNewRowOutPatient = document.createTextNode(
      `${patient.getOutPatient()}`
    );
    newCellOutPatient.appendChild(strNewRowOutPatient);
  }
});

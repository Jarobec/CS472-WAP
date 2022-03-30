/* Midterm Exam - Part 2 - Question 09 */
/* Author: Jargal Ganbaatar */
/* WAP, Exam, Midterm, CS472 */

"use strict";

const btn = document.getElementById("submitBtn");
btn.onclick = showAlert;

function showAlert() {
  const fullName = document.getElementById("fullName");
  const citizenID = document.getElementById("citizenID");
  const ssn = document.getElementById("ssn");
  const state = document.getElementById("state");
  const isSeniorYes = document.getElementById("isSeniorYes");
  const isSeniorNo = document.getElementById("isSeniorNo");

  alert(
    "Citizen ID: " +
      citizenID.value +
      "\n" +
      "SSN: " +
      ssn.value +
      "\n" +
      "Full Name: " +
      fullName.value +
      "\n" +
      "State: " +
      state.value +
      "\n" +
      "Senior: " +
      (isSeniorYes.checked ? isSeniorYes.value : isSeniorNo.value)
  );
}

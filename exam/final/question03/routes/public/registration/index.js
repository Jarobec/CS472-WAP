/**
 * routes/public/registration/index.js
 *
 * @author Jargal Ganbaatar
 * @since 2022-03-17
 */
"use strict";

const express = require("express");
const path = require("path");
const registrationRouter = express.Router();
const dataStore = require("../../../datastore/datastore");

registrationRouter.get("/", (req, res) => {
  console.log(`Presenting registration page`);

  const registers = dataStore.getData();
  res.locals = { registers: registers };
  res.render("public/registration/register");
});

registrationRouter.post("/new", (req, res) => {
  console.log(`Adding new student`);

  const newStudent = {
    studentId: req.body.txtStudentId,
    fullName: req.body.txtFullName,
    levelOfStudy: req.body.ddlLevelOfStudy,
  };
  const result = dataStore.addData(newStudent);
  if (result) res.redirect(303, "/registration");
});

module.exports = registrationRouter;

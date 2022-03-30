/**
 * Assignment 14 - Implement the MiniBank webapp using NodeJS+ Express.JS+Database
 * index.js
 */
"use strict";

const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home");
const accountRoutes = require("./routes/account");

const app = express();
const PORT_NUMBER = 9000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("", homeRoutes);
app.use("/account", accountRoutes);

// Put the Error 404 middleware last
app.use((req, res, next) => {
  console.log("Error");
  res.status(404);
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server is running on port ${PORT_NUMBER}`);
});

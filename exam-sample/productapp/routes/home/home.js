/**
 * home.js
 * 
 * @author Byambadorj
 * @since 2022-03-16
 */

"use strict";

const express = require("express");
const path = require("path");
const homeRouter = express.Router();

homeRouter.get("/", (req, res, next) => {
    console.log(`GET home router works`);
    res.sendFile(path.join(__dirname, "../../views/index.html"));
});

module.exports = homeRouter;
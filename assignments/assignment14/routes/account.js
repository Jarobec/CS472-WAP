/**
 * routes/account.js
 */
"use strict";

const express = require("express");
const path = require("path");
const accountController = require("../controller/accountController");
const accountRouter = express.Router();

accountRouter.get("/", async (req, res, next) => {
  const accounts = await accountController.getAccounts(req, res);
  res.locals = { accounts: accounts };
  res.render("account");
});

accountRouter.post("/register", async (req, res, next) => {
  console.log(`Registering...`);
  // const newAccount = new Account(
  //   data.txtAccountNo,
  //   data.txtCustomerName,
  //   data.ddlAccountType
  // );

  const result = await accountController.addAccount(req, res);
  if (result) res.redirect(303, "/account");
});

module.exports = accountRouter;

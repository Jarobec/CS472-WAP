/**
 * controller/accountController.js
 */
"use strict";

const accountDAO = require("../db/dao/accountDAO");

const accountController = (function () {
  const getAccounts = async function (req, res) {
    try {
      const accounts = await accountDAO.getAccounts();
      return accounts;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  const addAccount = async function (req, res) {
    try {
      const result = await accountDAO.addAccount(req.body);
      return result;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  return {
    getAccounts: getAccounts,
    addAccount: addAccount,
  };
})();

module.exports = accountController;

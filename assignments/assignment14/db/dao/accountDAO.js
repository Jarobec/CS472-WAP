/**
 * db/dao/accountDAO.js
 */
"use strict";

const dbConnectionMgr = require("../dbconnectionmgr");
const Account = require("../../model/account");

const accountDAO = (function () {
  const accounts = [];

  // get account list from database
  const getAccounts = async function () {
    // const accounts = [];
    // accounts.push(new Account("01-980-0001", "James H. Karvill", "Savings"));
    // accounts.push(
    //   new Account("01-980-0002", "Anna Hernandez-Diaz", "Checking")
    // );
    // accounts.push(new Account("01-980-0003", "Henry Jones Jr", "Loan"));
    // const qString =
    //   "SELECT accountNo, customerName, typeOfAccount FROM `tbAccount`";
    // try {
    //   const dbConnection = dbConnectionMgr.getConnection();
    //   const [accounts] = await dbConnection.promise().query(qString);
    //   return accounts;
    // } catch (error) {
    //   console.log(`DB Access Error: ${error}`);
    //   throw error;
    // }
    return accounts;
  };

  // insert account data to database
  const addAccount = async function (newAccount) {
    const account = new Account(
      newAccount.txtAccountNo,
      newAccount.txtCustomerName,
      newAccount.ddlAccountType
    );
    accounts.push(account);
    return true;
    // const qString = `INSERT INTO tbAccount
    // (accountNo, customerName, typeOfAccount)
    // VALUES
    // ('${newAccount.txtAccountNo}', '${newAccount.txtCustomerName}', '${newAccount.ddlAccountType}')`;
    // try {
    //   const dbConnection = dbConnectionMgr.getConnection();
    //   const result = await dbConnection.promise().execute(qString);
    //   return result;
    // } catch (error) {
    //   console.log(`DB Access Error: ${error}`);
    //   throw error;
    // }
  };

  return { getAccounts: getAccounts, addAccount: addAccount };
})();

module.exports = accountDAO;

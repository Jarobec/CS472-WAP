/**
 * model/account.js
 */
"use strict";

function Account(accountNo, customerName, typeOfAccount) {
  this.accountNo = accountNo;
  this.customerName = customerName;
  this.typeOfAccount = typeOfAccount;
}

module.exports = Account;

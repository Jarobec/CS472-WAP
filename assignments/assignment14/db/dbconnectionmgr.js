/**
 * db/dbconnectionmgr.js
 */
"use strict";

const mysql = require("mysql2");
const config = require("./config");

const dbConnectionMgr = (function (config) {
  /**
   * Makes and returns a Database connection pool using the given configuration
   */
  const getConnection = function () {
    return mysql.createPool(config);
  };
  return {
    getConnection: getConnection,
  };
})(config);

module.exports = dbConnectionMgr;

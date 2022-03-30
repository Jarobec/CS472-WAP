/**
 * productDAO.js
 */
"use strict";

const dbConnectionMgr = require("../dbconnectionmgr");
const Product = require("../../model/product");

//TODO Use ES6 class syntax
const productDAO = (function () {
  /*
    const getProducts = function() {
        const dbConnection = dbConnectionMgr.getConnection();
        const prods = dbConnection.connect((error) => {
            if(error) {
                console.log(`DBConnection Error: Database connection attempt failed.`);
                console.log(error);
                throw error;
            }
            const qryStrGetProducts = "select * from `cs472-202203-prodmgmt-db`.`products`";
            const qryResult = dbConnection.query(qryStrGetProducts, (error, result) => {
                if(error) {
                    console.log(error);
                    throw error;
                }
                const products = [];
                console.table(result);
                console.log(result);
                for(let product of result) {
                    console.log(`This is Product: ` + product);
                    const productId = product.productId;
                    const productNo = product.productNo;
                    const productName = product.productName;
                    const unitPrice = product.unitPrice;
                    products.push(new Product(productId, productNo, productName,unitPrice));
                }
                return products;
            });
            return qryResult;
        });
        return prods;
    } */
  // const getProducts = function() {
  //     const products = [];
  //     products.push(new Product(1001, "Apple iPhone 15", 1700));
  //     products.push(new Product(1002, "Samsung Android S22", 1500));
  //     products.push(new Product(1001, "Google Pixel 11", 1200));
  //     return products;
  // }
  const getProducts = async function () {
    const qryStrGetProducts =
      "select * from `cs472-202203-prodmgmt-db`.`products`";
    try {
      const dbConnection = dbConnectionMgr.getConnection();
      const [products] = await dbConnection.promise().query(qryStrGetProducts);
      return products;
    } catch (error) {
      console.log(`DB Access Error: ${error}`);
      throw error;
    }
  };

  const saveProduct = async function (p) {
    const cmdStrSaveProduct = `insert into products (productNo, productName, unitPrice) values (${p.productNo}, '${p.productName}', ${p.unitPrice})`;
    console.log(`SQL Insert Command String: ${cmdStrSaveProduct}`);
    try {
      const dbConnection = dbConnectionMgr.getConnection();
      const saveOpResult = await dbConnection
        .promise()
        .execute(cmdStrSaveProduct);
      return saveOpResult;
    } catch (error) {
      console.log(`DB Access Error: ${error}`);
      throw error;
    }
  };

  const getHotDeals = async function () {
    const qryStrGetProducts =
      "select * from `cs472-202203-prodmgmt-db`.`products` where unitPrice < 1000";
    try {
      const dbConnection = dbConnectionMgr.getConnection();
      const [products] = await dbConnection.promise().query(qryStrGetProducts);
      return products;
    } catch (error) {
      console.log(`DB Access Error: ${error}`);
      throw error;
    }
  };

  return {
    getProducts: getProducts,
    saveProduct: saveProduct,
    getHotDeals: getHotDeals,
  };
})();

module.exports = productDAO;

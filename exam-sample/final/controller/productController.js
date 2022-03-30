/**
 * productController.js
 */
"use strict";

const productDAO = require("../db/dao/productDAO");
const Product = require("../model/product");

const productController = (function () {
  const getProducts = async function (req, res) {
    try {
      const products = await productDAO.getProducts();
      console.log(`Products in controller: ${products}`);
      return products;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  const addNewProduct = async function (req, res) {
    const productNo = parseInt(req.body.productNo);
    const productName = req.body.productName;
    const unitPrice = parseFloat(req.body.unitPrice);
    const p = new Product(null, productNo, productName, unitPrice);
    try {
      const opRes = await productDAO.saveProduct(p);
      console.log(`Save Product in controller: ${opRes}`);
      return opRes;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  const getHotDeals = async function (req, res) {
    try {
      const products = await productDAO.getHotDeals();
      console.log(`Products in controller: ${products}`);
      return products;
    } catch (error) {
      res.status(500);
      res.render("50x", { error: error });
    }
  };

  return {
    getProducts: getProducts,
    addNewProduct: addNewProduct,
    getHotDeals: getHotDeals,
  };
})();

module.exports = productController;

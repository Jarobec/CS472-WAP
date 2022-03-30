/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const productRouter = express.Router();

const productController = require("../../controller/productController");

// Define routes for product pages
productRouter.get("/list", async (req, res, next) => {
  console.log(`Presenting list of products page`);

  const products = await productController.getProducts(req, res);
  console.log(products);
  res.locals = { products: products };
  res.render("product-list");
  // res.render("product-list", {products: products});
});

productRouter.get("/new", (req, res, next) => {
  console.log(`Presenting new product form page`);
  res.sendFile(path.join(__dirname, "../../views", "product-form.html"));
});

productRouter.post("/new", async (req, res, next) => {
  console.log(`Adding new product - controller`);
  const result = await productController.addNewProduct(req, res);
  console.log(result);
  // PRG pattern here - redirect to product-list page
  res.redirect(303, "/product/list");
});

productRouter.get("/hot", async (req, res, next) => {
  console.log(`Presenting hot deals page`);

  const products = await productController.getHotDeals(req, res);
  console.log(products);
  res.locals = { products: products };
  res.render("product-hot-deals");
});

module.exports = productRouter;

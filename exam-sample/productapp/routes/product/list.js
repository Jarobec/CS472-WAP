/**
 * product list js
 *
 * @author Byambadorj
 * @since 2022-03-16
 *
 */
"use strict";

const express = require("express");
// const path = require("path");
const listRouter = express.Router();
const productDAO = require("../../db/DAO/productDAO");

listRouter.get("/", (req, res, next) => {
  console.log(`GET product list router works`);
  const productsList = productDAO.getProducts();
  res.render("list", { products: productsList });
});

listRouter.get("/hot-deals", (req, res, next) => {
  console.log(`GET hot deals product router works`);
  const hotList = productDAO.getHotProducts();
  res.render("hot", { products: hotList });
});

listRouter.get("/edit/:id", (req, res, next) => {
  console.log(`GET edit router works ${req.params.id}`);
  const editGet = productDAO.getEditProducts(req, res);
  res.render("edit", { editProduct: editGet[0] });
});

listRouter.get("/delete/:id", (req, res, next) => {
  console.log(`DELETE router works`);
  productDAO.deleteProduct(req, res);
  res.redirect("/");
});

module.exports = listRouter;

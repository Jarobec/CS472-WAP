/**
 * index.js
 */
"use strict";

const express = require("express");
const path = require("path");
const productDAO = require("./db/dao/productDAO");
const app = express();
const productRouter = express.Router();
const port = 9000;

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
//  app.use(express.json());

app.use(productRouter);

productRouter.get("/list", (req, res, next) => {
  const products = productDAO.getProducts();
  res.locals = { products: products };
  res.render("product-list");
});

app.listen(port, () => {
  console.log(`Web Server started on port ${port}`);
});

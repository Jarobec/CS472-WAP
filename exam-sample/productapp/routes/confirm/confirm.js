/**
 * confirm.js
 * 
 * @author Byambadorj
 * @since 2022-03-16
 * 
 */

"use strict";

const express = require("express");
const path = require("path");
const confirmRouter = express.Router();
const productDAO = require("../../db/DAO/productDAO");

confirmRouter.get("/", (req, res, next) => {
    console.log(`GET confirm router works`);
    const products = productDAO.getProducts();
    res.render("confirm", { products: products });

    /**
     * using req.query query string
     */
    // res.render("confirm", { productNo: req.query.productNo, productName: req.query.productName, unitPrice: req.query.unitPrice });
});

module.exports = confirmRouter;
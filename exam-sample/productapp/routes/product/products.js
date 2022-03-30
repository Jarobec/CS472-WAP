/**
 * product.js
 * 
 * @author Byambadorj
 * @since 2022-03-16
 */

"use strict";

const express = require("express");
const path = require("path");
const productRouter = express.Router();
const productDAO = require("../../db/DAO/productDAO");

productRouter.get("/", (req, res, next) => {
    console.log(`GET Product form router works`);
    res.sendFile(path.join(__dirname, "../../views", "product-form.html"));
});


productRouter.post("/add", (req, res, next) => {
    console.log(`POST product form router works`);
    productDAO.newProducts(req, res);
    res.redirect(303, `/confirm-page`);
    /**
     * using queryString
     */
    // const queryString = `productNo=${req.body.productNo}&productName=${req.body.productName}&unitPrice=${req.body.unitPrice}`;
    // res.redirect(303, `/confirm-page?${queryString}`);
});

productRouter.post("/edit/:id", (req, res, next) => {
    console.log(`POST update product form router works`);
    productDAO.updateProducts(req, res);
    res.redirect('/product-list');
    // productDAO.newProducts(req, res);
    // res.redirect(303, `/confirm-page`);
    /**
     * using queryString
     */
    // const queryString = `productNo=${req.body.productNo}&productName=${req.body.productName}&unitPrice=${req.body.unitPrice}`;
    // res.redirect(303, `/confirm-page?${queryString}`);
});

module.exports = productRouter;
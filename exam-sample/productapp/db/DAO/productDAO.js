/**
 * 
 * product DAO 
 * 
 * @author Byambadorj
 * @since 2022-03-16
 * 
 */
"use strict";

const Product = require("../../model/products");

const productDAO = (function () {
    const products = [];
    products.push(new Product("0001", "iPhone8", 500.00));
    products.push(new Product("0002", "iPhone10", 800.00));

    //get product list;
    const getProducts = function () {
        return products;
    }

    //create new products to list
    const newProducts = function (req, res) {
        products.push(new Product(req.body.productNo, req.body.productName, req.body.unitPrice));
    }

    //get products <= 500.00 unit price
    const getHotProducts = function () {
        const filtered = products.filter(e => e.unitPrice <= 500.00);
        return filtered;
    }

    //get edit products
    const getEditProducts = function (req, res) {
        const filtered = products.filter(e => e.productNumber == req.url.slice(6))
        return filtered;
    }

    //update products
    const updateProducts = function (req, res) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].productNumber == req.body.productNo) {
                products[i].productName = req.body.productName;
                products[i].unitPrice = req.body.unitPrice;
            }
        }
    }

    //delete products
    const deleteProduct = function (res, req) {
        console.log(res.url.slice(8));
        for (let i = 0; i < products.length; i++) {
            if (products[i].productNumber == res.url.slice(8)) {
                products.splice(i, 1);
            }
        }
    }

    return {
        getProducts: getProducts,
        newProducts: newProducts,
        getHotProducts: getHotProducts,
        getEditProducts: getEditProducts,
        updateProducts: updateProducts,
        deleteProduct: deleteProduct,
    }
})();

module.exports = productDAO;


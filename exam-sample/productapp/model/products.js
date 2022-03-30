/**
 * product class
 * 
 * @author Byambadorj
 * @since 2022-03-16
 * 
 */
"use strict";

function Product(productNumber, productName, unitPrice) {
    this.productNumber = productNumber;
    this.productName = productName;
    this.unitPrice = unitPrice;
}

module.exports = Product;
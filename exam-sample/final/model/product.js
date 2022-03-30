/**
 * product.js
 */
"use strict";

// TODO: use ES6 class syntax
function Product(productId, productNo, productName, unitPrice) {
  this.productId = productId;
  this.productNo = productNo;
  this.productName = productName;
  this.unitPrice = unitPrice;
}

module.exports = Product;

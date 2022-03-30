/**
 * index.js
 * 
 * A demo express.js webapp
 * 
 * @author OKalu
 * @since 2022-03-12
 */

"use strict";

const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home/home");
const productRouter = require("./routes/product/products");
const confirmRouter = require("./routes/confirm/confirm");
const listRouter = require("./routes/product/list");

const app = express();

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
//  app.use(express.json());

// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("", homeRouter);

app.use("/product-form", productRouter);

app.use("/confirm-page", confirmRouter);

app.use("/product-list", listRouter);


// Put the Error 404 middleware last
app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    // res.status(404).redirect(303, "/static/html/404.html");
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});
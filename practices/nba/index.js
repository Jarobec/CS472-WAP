/**
 * index.js
 */
"use strict";
const express = require("express");
const axios = require("axios");
const port = 1024;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  let sum = 0;
  for (let i = 2003; i < 2022; i++) {
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/stats?player_ids[]=237&per_page=100&postseason=false&seasons[]=${i}`
    );

    const list = response.data;
    const sumPoints = list.data
      .map((point) => point.pts)
      .reduce((a, b) => a + b, 0);
    sum += sumPoints;
  }

  res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
      <head><meta charset=\"utf-8\"/>
          <title>Calculator Web Site</title>
          <link rel="stylesheet" href="/css/style.css" />
     </head>
     <body>
       <p>The  is: <span>${String(
         new Intl.NumberFormat().format(sum)
       )}</span></p>
     </body>
    </html>`);
});

app.listen(port, () => {
  console.log(`Web Server started on port ${port}`);
});

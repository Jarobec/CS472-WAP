/**
 * app.js
 * @author Jargal Ganbaatar
 * @since 2022-03-17
 */
"use strict";

$(document).ready(function () {
  $("#articlesList").on("click", "a", function (event) {
    event.preventDefault();

    const $a = $("<a>", {
      href: "http://www.google.com",
      text: "Click to Add a new Account",
    });
    const $p = $("<p>", { text: "Here is an Account - " }).append($a);
    const $article = $("<article>").append($p);
    $("#articlesList").append($article);
  });
});

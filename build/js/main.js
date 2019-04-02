"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsData_1 = require("./newsData");
var reveal = function () {
    var menu = document.getElementById("menu");
    menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none";
};
;
var newsData = newsData_1.default;
var addToPage = function () {
    var html = "<article>\n    <img src=\"http://www.placekitten.com/600/400\" alt=\"a cat\" />\n    <header>Intoxicated cat steals JCB, ploughs into local town hall</header>\n    <div class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\n        qui officia deserunt mollit anim id est laborum.</div>\n</article>";
    document.getElementById("container").innerHTML = html;
};
addToPage();
// newsData.articles.forEach(element => {
//     addToPage(element;)
// });
//# sourceMappingURL=main.js.map
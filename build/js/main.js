"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newsData_1 = require("./newsData");
// const reveal = (): void => {
//     const menu = document.getElementById("menu");
//     menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none";
// };
// const refinedReveal = () => {
//     const menu = document.getElementById("menu").classList.toggle("not_hidden");
// };
window.refinedReveal = function (e) {
    e.preventDefault();
    document.getElementById("menu").classList.toggle("not_hidden");
};
var getTime = function (date) {
    var dateObject = new Date(date);
    return dateObject.toLocaleDateString();
};
;
var newsData = newsData_1.default;
var addToPage = function (article) {
    var html = "<article>\n    <div class=\"image\" style=\"background-image:url('" + ((article.urlToImage) ? article.urlToImage = article.urlToImage : article.urlToImage = "../../placeholder-image.jpg") + "')\"></div>\n    <header>" + article.title + "</header>\n    <span>" + getTime(article.publishedAt) + "</span>\n    <div class=\"description\">" + article.description + "</div>\n</article>";
    document.getElementById("container").innerHTML += html;
};
// addToPage();
newsData.articles.forEach(function (element) {
    addToPage(element);
});
//# sourceMappingURL=main.js.map
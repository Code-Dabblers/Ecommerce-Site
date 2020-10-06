import { html, render } from "/node_modules/lit-html/lit-html.js";
import homepage from "./modules/homepage.js";
import cart from "./modules/cart.js";
import search from "./modules/search.js";
import productList from "./modules/product-list.js";
import productDetails from "./modules/product-details.js";

var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);

router
  .on({
    "/products/list": function () {
      console.log("/products/list route");
      // Render the template to the document
      render(productList(), document.getElementById("router"));
    },
    "/products/search/:query": function (params) {
      console.log(`/products/search/:query route, query is ${params.query}`);
      render(search(params.query), document.getElementById("router"));
    },
    "/details/:item": function (params) {
      console.log(`/details/:item route, item is ${params.item}`);
      render(productDetails(params.item), document.getElementById("router"));
    },
    "/cart": function () {
      console.log("/cart route");
      render(cart(), document.getElementById("router"));
    },
    "/": function () {
      console.log("/ route");

      // Render the template from imported module
      render(homepage(), document.getElementById("router"));
    },
  })
  .resolve();

router
  .notFound(function () {
    // Define a template
    const myTemplate = () => html`<h1 class="random">Error 404: Not Found</h1>`;

    // Render the template to the document
    render(myTemplate(), document.getElementById("router"));
  })
  .resolve();

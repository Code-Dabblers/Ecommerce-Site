import "../styles/sass/main.scss";
import { html, render } from "lit-html";
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

const userIcon = document.getElementById('user-icon');

userIcon.addEventListener("click",(e)=>{
  const userInfo = document.getElementById("user-info");
  userInfo.classList.toggle("d-block");
});

const arrowLeft  = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const testimonialsP = document.querySelector(".testimonials__p");

arrowLeft.addEventListener("click", (e)=>{
  arrowLeft.classList.add("active-arrow");
  arrowRight.classList.remove("active-arrow");
  testimonialsP.innerHTML = "Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage."
});

arrowRight.addEventListener("click", (e)=>{
  arrowRight.classList.add("active-arrow");
  arrowLeft.classList.remove("active-arrow");
  testimonialsP.innerHTML = "Second Page"
});

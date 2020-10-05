import { html, render } from "../../node_modules/lit-html/lit-html.js";
import homepage from "./modules/homepage.js";

var root = null;
var useHash = true; // Defaults to: false
var hash = "#!"; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
router
  .on("/", function () {
    // Render the template from imported module
    render(homepage(), document.getElementById("router"));
  })
  .resolve();

router
  .on("products", function () {
    // Define a template
    const myTemplate = (name) => html`<h1 class="random">Hello ${name}</h1>`;

    // Render the template to the document
    render(myTemplate("World"), document.getElementById("router"));
  })
  .resolve();

router.notFound(function () {
  // Define a template
  const myTemplate = () => html`<h1 class="random">Error 404: Not Found</h1>`;

  // Render the template to the document
  render(myTemplate(), document.getElementById("router"));
});

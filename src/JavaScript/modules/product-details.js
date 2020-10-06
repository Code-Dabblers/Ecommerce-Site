import { html } from "/node_modules/lit-html/lit-html.js";

const productDetails = (query) => {
  console.log(query);
  return html`
    <div class="random">
      <h1>Its Product Details</h1>
      <h2>And this route is "/details/${query}"</h2>
    </div>
  `;
};

export default productDetails;

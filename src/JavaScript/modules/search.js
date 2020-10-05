import { html } from "../../../../node_modules/lit-html/lit-html.js";

const search = (query) => {
  return html`
    <div class="random blue">
      <h1>Its search Route</h1>
      <h2>And this route is "/cart"</h2>
      <br />
      <h2>Route parameter which was passed is ${query}</h2>
    </div>
  `;
};

export default search;

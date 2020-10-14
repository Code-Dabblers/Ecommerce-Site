import { html } from "lit-html";

const error404 = () => {
  return html`
    <div>
      <h1>ERROR 404</h1>
      <h2>Route not found</h2>
    </div>
  `;
};

export default error404;

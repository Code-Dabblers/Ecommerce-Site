import { html } from "lit-html";

const error404 = () => {
  const appLogo = require("../../assets/svgs/app-logo.svg")
  return html`
    <div class="error404">
    <div class="error404__errmsg">
      <div class="error404__errmsg__404">404</div>
      <div class="error404__errmsg__msg">Sorry the content you are looking for doesn't exist.Either it was removed, or you mistyped the link.</div>
      <a href="#">Go to homepage</a>
    </div>
    </div>
  `;
};

export default error404;

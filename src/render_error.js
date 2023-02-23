import { toDomNode } from "./helpers/dom_fns";

const contentContainer = document.getElementById("content");

export const renderError = () => {
  contentContainer.replaceChildren();

  document.body.className = "";

  contentContainer.appendChild(
    toDomNode(
      `<div class="error">
        <h2>Error!</h2>
        <p>Couldn't find city matching that term.</p>
        <p>Please try searching again.</p>
      </div>`
    )
  )
}

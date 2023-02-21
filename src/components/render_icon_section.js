import { toDomNode } from "../helpers/to_html";
import * as icons from "../icons/manifest";

export const renderIconSection = (iconKey, description, parent) => {
  const iconSection = toDomNode(
    `<div class="weather__icon">
      ${icons[iconKey]}
      <p class="weather__icon__description">
      </p>
    </div>`
  )
  iconSection.querySelector("p").textContent = description;

  parent.appendChild(iconSection);
}

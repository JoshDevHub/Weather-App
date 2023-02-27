import { toDomNode } from "../../helpers/dom_fns";
import * as icons from "../../icons/manifest";

export const createIconSection = (iconKey, description) => {
  const iconSection = toDomNode(
    `<div class="weather__icon">
      ${icons[iconKey]}
      <p class="weather__icon__description">
      </p>
    </div>`
  )
  iconSection.querySelector("p").textContent = description;

  return iconSection;
}

import { buildElement } from "./build_element";
import { selectProps, transformValues } from "./helpers";

const selectTemps = selectProps("temp", "temp_max", "temp_min");
const roundTemp = (temp) => Math.round(temp);

const contentContainer = document.getElementById("content");
export const renderWeather = (data) => {
  contentContainer.replaceChildren();

  const fragment = document.createDocumentFragment();
  fragment.appendChild(
    buildElement({ tag: "h3", text: `${data.name}, ${data.country}` })
  )

  const displayTemperatures = transformValues(selectTemps(data), roundTemp);

  fragment.appendChild(
    buildElement(
      {
        tag: "div",
        children: [
          { tag: "p", text: `Currently: ${displayTemperatures.temp}` },
          { tag: "p", text: `High: ${displayTemperatures.temp_max}` },
          { tag: "p", text: `Low: ${displayTemperatures.temp_min}` },
        ]
      }
    )
  )

  contentContainer.appendChild(fragment);
}

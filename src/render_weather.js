import { buildElement } from "./build_element";
import { selectProps, transformValues } from "./helpers";
import * as icons from "./icons/manifest";

const weatherToPropMap = {
  "Clouds": "cloudy",
  "Clear": "sunny",
  "Rain": "rainy",
  "Drizzle": "rainy",
  "Snow": "snowy"
}

const selectTemps = selectProps("temp", "temp_max", "temp_min");
const roundTemp = (temp) => Math.round(temp);

const unitUnicodeMap = {
  "imperial": String.fromCodePoint(8451),
  "metric": String.fromCodePoint(8457)
}
const temperatureWithUnit = (temp, units) => temp + unitUnicodeMap[units];

const contentContainer = document.getElementById("content");
export const renderWeather = (data) => {
  contentContainer.replaceChildren();
  const weatherProp = weatherToPropMap[data.weatherType];
  document.body.className = `${weatherProp}`;


  const fragment = document.createDocumentFragment();
  fragment.appendChild(
    buildElement({ tag: "h1", text: `${data.name}, ${data.country}` })
  )

  fragment.appendChild(
    buildElement({
      tag: "div",
      attributes: { class: "weather__icon" },
      children: [
        {
          tag: "svg",
          data: icons[weatherProp]
        },
        {
          tag: "p",
          attributes: { class: "weather__icon__description" },
          text: data.description
        }
      ]
    })
  )

  const displayTemperatures = transformValues(selectTemps(data), roundTemp);

  fragment.appendChild(
    buildElement(
      {
        tag: "div",
        children: [
          {
            tag: "p",
            text: temperatureWithUnit(displayTemperatures.temp, data.units)
          },
        ]
      }
    )
  )

  contentContainer.appendChild(fragment);
}

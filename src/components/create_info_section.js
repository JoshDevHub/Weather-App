import { toDomNode } from "../helpers/to_html";

const unitUnicodeMap = {
  "metric": String.fromCodePoint(8451),
  "imperial": String.fromCodePoint(8457)
}
const combineTempWithUnit = (temp, units) => `${temp}${unitUnicodeMap[units]}`;
const roundTemp = (temp) => Math.round(temp);

export const createInfoSection = ({ temp, units }) => {
  const temperatureDisplay = combineTempWithUnit(roundTemp(temp), units);

  const infoDisplay = toDomNode(
    `<div>
      <p></p>
    </div>`
  )
  infoDisplay.querySelector("p").textContent = temperatureDisplay;

  return infoDisplay;
}

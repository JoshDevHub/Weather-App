import { toDomNode } from "../helpers/to_html";

const unitUnicodeMap = {
  "metric": String.fromCodePoint(8451),
  "imperial": String.fromCodePoint(8457)
}
const combineTempWithUnit = (temp, units) => `${temp}${unitUnicodeMap[units]}`;
const roundTemp = (temp) => Math.round(temp);

export const createInfoSection = (info) => {
  const infoData = [
    combineTempWithUnit(roundTemp(info.temp), info.units),
    combineTempWithUnit(roundTemp(info.feels_like), info.units),
    `${info.humidity}%`,
  ]

  const infoDisplay = toDomNode(
    `<dl class="weather__info-section">
      <dt>Temperature</dt>
      <dd></dd>
      <dt>Feels Like</dt>
      <dd></dd>
      <dt>Humidity</dt>
      <dd></dd>
    </dl>`
  )
  infoDisplay.querySelectorAll("dd").forEach((desc, index) => {
    desc.textContent = infoData[index];
  })

  return infoDisplay;
}

import { createHeading } from "./helpers/to_html";
import { renderExtraInfo } from "./components/render_extra_info";
import { renderIconSection } from "./components/render_icon_section"

const weatherToPropMap = new Map([
  ["Clouds", "cloudy"],
  ["Clear", "sunny"],
  ["Rain", "rainy"],
  ["Drizzle", "rainy"],
  ["Snow", "snowy"],
  ["Stormy", "stormy"]
])

const contentContainer = document.getElementById("content");

export const renderWeather = (data) => {
  const weatherProp = weatherToPropMap[data.weatherType];

  contentContainer.replaceChildren();

  document.body.className = weatherProp;
  contentContainer.appendChild(
    createHeading(1, `${data.name}, ${data.country}`)
  )

  renderIconSection(weatherProp, data.description, contentContainer);
  renderExtraInfo(data, contentContainer);
}

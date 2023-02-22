import { createHeading } from "./helpers/to_html";
import { createInfoSection } from "./components/create_info_section";
import { createIconSection } from "./components/create_icon_section";

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
  const weatherProp = weatherToPropMap.get(data.weatherType);

  contentContainer.replaceChildren();

  document.body.className = weatherProp;
  const subTree = [
    createHeading(1, `${data.name}, ${data.country}`),
    createIconSection(weatherProp, data.description),
    createInfoSection(data)
  ]
  subTree.forEach((component) => contentContainer.appendChild(component));
}

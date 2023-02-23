import { contentTag } from "./helpers/dom_fns";
import { createInfoSection } from "./components/create_info_section";
import { createIconSection } from "./components/create_icon_section";
import { createTimeSection } from "./components/create_time_section";

import { selectProps } from "./helpers";

const weatherToPropMap = new Map([
  ["Clouds", "cloudy"],
  ["Clear", "sunny"],
  ["Rain", "rainy"],
  ["Drizzle", "rainy"],
  ["Snow", "snowy"],
  ["Stormy", "stormy"]
])

const contentContainer = document.getElementById("content");
const extractWeatherInfo = selectProps("temp", "humidity", "feels_like", "units");

export const renderWeather = (data) => {
  const weatherProp = weatherToPropMap.get(data.weatherType);

  contentContainer.replaceChildren();

  document.body.className = weatherProp;
  const subTree = [
    contentTag("h1", `${data.name}, ${data.country}`),
    createTimeSection(data.timezoneOffset),
    createIconSection(weatherProp, data.description),
    createInfoSection( extractWeatherInfo(data) )
  ]

  subTree.forEach((component) => contentContainer.appendChild(component));
}

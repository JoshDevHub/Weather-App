import { contentTag } from "./helpers/dom_fns";
import { createInfoSection } from "./components/create_info_section";
import { createIconSection } from "./components/create_icon_section";
import { createTimeSection } from "./components/create_time_section";

import { selectProps } from "./helpers";

const weatherToPropMap = new Map([
  ["Clouds day", "cloudy"],
  ["Clouds night", "cloudy"],
  ["Clear day", "sunny"],
  ["Clear night", "night"],
  ["Rain", "rainy"],
  ["Drizzle", "rainy"],
  ["Snow", "snowy"],
  ["Stormy", "stormy"]
])

const contentContainer = document.getElementById("content");
const extractWeatherInfo = selectProps("temp", "humidity", "feels_like", "units");

const isDaylight = (sunrise, sunset) => {
  const currentUtcSeconds = Math.floor(Date.now() / 1000);
  return sunrise <= currentUtcSeconds && currentUtcSeconds <= sunset;
}

const getWeatherKey = (weatherType, daytime) => {
  if (weatherType === "Clouds" || weatherType === "Clear") {
    return `${weatherType} ${daytime ? 'day' : 'night'}`
  }

  return weatherType;
}

export const renderWeather = (data) => {
  const daytime = isDaylight(data.sunrise, data.sunset);
  const weatherProp = weatherToPropMap.get(
    getWeatherKey(data.weatherType, daytime)
  );

  contentContainer.replaceChildren();

  document.body.className = weatherProp;
  const subTree = [
    contentTag("h1", `${data.name}, ${data.country}`),
    createTimeSection(data.timezoneOffset),
    createIconSection(
      weatherProp,
      data.description,
      { daytime }
    ),
    createInfoSection( extractWeatherInfo(data) )
  ]

  subTree.forEach((component) => contentContainer.appendChild(component));
}

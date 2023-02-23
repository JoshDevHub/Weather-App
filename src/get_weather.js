import { selectProps } from "./helpers";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
const APPID_PARAM = `APPID=${process.env.OPEN_WEATHER_KEY}`;

const getLocationData = selectProps("name", "country");
const getTemperatureData = selectProps("temp", "humidity", "feels_like");

export async function fetchData(location, units = "imperial") {
  const { lat, lon } = location;
  const locationParams = `lat=${lat}&lon=${lon}`;
  const requestUrl = `${BASE_URL}${locationParams}&${APPID_PARAM}&units=${units}`;
  try {
    const response = await fetch(requestUrl, { mode: "cors" })
    const resJSON = await response.json();
    console.log(resJSON);
    return {
      ...getLocationData(location),
      ...getTemperatureData(resJSON.main),
      weatherType: resJSON.weather[0].main,
      description: resJSON.weather[0].description,
      units
    }
  } catch(error) {
    console.log(error);
  }
}

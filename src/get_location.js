import { selectProps } from "./helpers";

const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct?q="
const LIMIT_PARAM = "limit=1"; // only lookup 1 city per request
const APPID = `APPID=${process.env.OPEN_WEATHER_KEY}`;

const extractJsonData = selectProps("name", "country", "lat", "lon");

export default async function getLocation(cityName) {
  const requestUrl = `${BASE_URL}${cityName}&${LIMIT_PARAM}&${APPID}`;
  try {
    const response = await fetch(requestUrl, { mode: "cors" })
    const resJSON = await response.json();
    return extractJsonData(resJSON[0]);
  } catch(error) {
    console.log(error);
  }
}


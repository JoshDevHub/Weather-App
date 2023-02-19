const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
const APPID_PARAM = `APPID=${process.env.OPEN_WEATHER_KEY}`;

export default async function getWeather(location, units = "imperial") {
  const { lat, lon } = location;
  const locationParams = `lat=${lat}&lon=${lon}`;
  const requestUrl = `${BASE_URL}${locationParams}&${APPID_PARAM}&units=${units}`;
  try {
    const response = await fetch(requestUrl, { mode: "cors" })
    const resJSON = await response.json();
    return resJSON;
  } catch(error) {
    console.log(error);
  }
}

// entry point script

import getLocation from "./get_location";
import getWeather from "./get_weather";

getLocation("London")
  .then(getWeather)
  .then(console.log);


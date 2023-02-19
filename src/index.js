// entry point script

import * as Location from "./get_location";
import * as Weather from "./get_weather";

Location
  .fetchData("London")
  .then(Weather.fetchData)
  .then(console.log);

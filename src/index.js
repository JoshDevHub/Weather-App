// entry point script

import "./stylesheets/application.scss";

import * as Location from "./get_location";
import * as Weather from "./get_weather";

const newEl = document.createElement("div");
newEl.classList.add("blue");
newEl.textContent = "ooga";
document.body.appendChild(newEl);

Location
  .fetchData("London")
  .then(Weather.fetchData)
  .then(console.log);

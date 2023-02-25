// entry point script

import "./stylesheets/application.scss";

import * as Location from "./get_location";
import * as Weather from "./get_weather";
import { renderWeather } from "./render_weather";
import { renderError } from "./render_error";


const form = document.querySelector("form");
const searchInput = document.getElementById("search");
const unitToggle = document.getElementById("units");
const getUnitSystem = () => unitToggle.checked ? "metric" : "imperial";

const handleSearch = (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value;
  console.log(getUnitSystem());
  Location
    .fetchData(searchTerm)
    .then((location) => Weather.fetchData(location, getUnitSystem()))
    /* .then(Weather.fetchData) */
    .then(renderWeather)
    .catch(renderError)

  searchInput.textContent = "";
}

form.addEventListener("submit", handleSearch);

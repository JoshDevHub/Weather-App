// entry point script

import "./stylesheets/application.scss";

import * as Location from "./get_location";
import * as Weather from "./get_weather";
import { renderWeather } from "./render_weather";
import { renderError } from "./render_error";

function getLatestQuery() {
  return localStorage.getItem("lastQuery");
}

const saveQuery = (data) => {
  localStorage.setItem("lastQuery", data.name);
}

const form = document.querySelector("form");
const searchInput = document.getElementById("search");
const unitToggle = document.getElementById("units");
const getUnitSystem = () => unitToggle.checked ? "metric" : "imperial";

const queryAndRenderWeather = (searchTerm) => {
  Location
    .fetchData(searchTerm)
    .then((location) => Weather.fetchData(location, getUnitSystem()))
    .then((weatherData) => {
      saveQuery(weatherData);
      renderWeather(weatherData);
    })
    .catch(renderError)
}

queryAndRenderWeather(
  getLatestQuery() ?? "London"
)

const handleSearch = (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value;
  queryAndRenderWeather(searchTerm);

  searchInput.textContent = "";
}

form.addEventListener("submit", handleSearch);

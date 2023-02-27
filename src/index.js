// entry point script

import "./stylesheets/application.scss";

import { callLocationApi } from "./services/call_location_api";
import { callWeatherApi } from "./services/call_weather_api";
import { renderWeather } from "./components/render_weather";
import { renderError } from "./components/render_error";

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
  callLocationApi(searchTerm)
    .then((location) => callWeatherApi(location, getUnitSystem()))
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

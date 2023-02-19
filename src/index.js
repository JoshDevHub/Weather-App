// entry point script

import "./stylesheets/application.scss";

import * as Location from "./get_location";
import * as Weather from "./get_weather";

const form = document.querySelector("form");
const searchInput = document.getElementById("search");
const handleSearch = (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value;
  Location.fetchData(searchTerm).then(Weather.fetchData).then(console.log);

  searchInput.value = "";
}

form.addEventListener("submit", handleSearch);

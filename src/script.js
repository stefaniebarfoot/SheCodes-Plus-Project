function setDateInfo() {
  let currentDayElement = document.querySelector(".current-day");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  currentDayElement.innerHTML = day;

  let currentTimeElement = document.querySelector(".current-time");

  let currentMinute = now.getMinutes();
  let currentHour = now.getHours();
  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  currentTimeElement.innerHTML = `${currentHour}:${currentMinute}`;
}
setDateInfo();

updateTemperature();
let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", findCity);

function findCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-input");
  let searchCityElement = document.querySelector(".current-city");
  searchCityElement.innerHTML = searchInputElement.value;
  updateTemperature();
}

function updateTemperature() {
  let searchCityElement = document.querySelector(".current-city");
  let apiKey = "437c87ob43tfba9d66870f5b6e45369a";
  let city = searchCityElement.innerHTML;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  function displayTemperature(response) {
    let temperatureElement = document.querySelector(".current-temp-number");
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = temperature;
  }

  axios.get(apiUrl).then(displayTemperature);
}

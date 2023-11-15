function sayWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let windSpeed = response.data.wind.speed;
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML= Math.round(temperature);
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `Humidity: ${response.data.temperature.humidity}%`
    windSpeedElement.innerHTML = `Wind: ${Math.round(windSpeed)}km/h`;
}

function formatDate(date) {
   let minutes = date.getMinutes();
   let hours = date.getHours();
   let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day = days[date.getDay()];

   if (minutes < 10) {
    minutes = `0${minutes}`;
   }
    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "1cb5e663abf44cab523b022o3700073t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(sayWeather);
}

function operateSearchInput(event){
    event.preventDefault();
    let searchFormInputElement = document.querySelector("#search-form-input");
    searchCity(searchFormInputElement.value);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", operateSearchInput);
searchCity("London");

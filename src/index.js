function sayWeather(response) {
    let cityElement = document.querySelector("#city");
    let iconElement = document.querySelector("#icon");
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let windSpeed = response.data.wind.speed;
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    cityElement.innerHTML = response.data.city;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
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

function displayForecast(){
    
let days= ["Sat", "Sun", "Mon", "Tue", "Wed",];
let forecastHtml = "";

days.forEach(function (day) {

  forecastHtml = forecastHtml + `
   
    <div class="col-2"> 
       <div class="forecast-day">${day}</div>
       <div class="forecast-icon">⛅</div>
      <div class="forecast-temperatures">
        <span class="forecast-temperature-max">24° </span>
        <span class="forecast-temperature-min">9° </span>
      </div>  
    </div>
  `;
});

let forecastElement = document.querySelector("#forecast"); 
forecastElement.innerHTML = forecastHtml;

}
let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", operateSearchInput);

searchCity("London");
displayForecast();


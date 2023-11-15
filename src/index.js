function sayWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML= Math.round(temperature);

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

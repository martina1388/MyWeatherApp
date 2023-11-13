function searchCity(event){
    event.preventDefault();
    let searchFormInputElement = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchFormInputElement.value;
}


let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
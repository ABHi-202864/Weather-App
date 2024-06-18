const inpBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temprature = document.querySelector(".temperature");
const description = document.querySelector(".discription");
const humidity = document.querySelector("#humidity-text");
const windSpeed = document.querySelector("#wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
let bodyShow = document.querySelector(".weather-body");


async function checkWeather(city) {
    const apiKey = "4c6d6ef77067da68dfd4de8280872d49";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(Response => Response.json());

    if (weatherData.cod === `404`) {
        locationNotFound.style.display = "flex";
        bodyShow.style.display = "none";
        return;
    }

    temprature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/h`;


    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "assets/cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "assets/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "assets/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "assets/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "assets/snow.png";
            break;
    }



    console.log(weatherData);

}


searchBtn.addEventListener("click", () => {
    checkWeather(inpBox.value);
})
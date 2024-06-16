const inpBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temprature = document.querySelector(".temperature");
const description = document.querySelector(".discription");
const humidity = document.querySelector("#humidity-text");
const windSpeed = document.querySelector("#wind-speed");


async function checkWeather(city) {
    const apiKey = "4c6d6ef77067da68dfd4de8280872d49";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(Response => Response.json());

    temprature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}Km/h`;

    

    console.log(weatherData);

}


searchBtn.addEventListener("click", () => {
    checkWeather(inpBox.value);
})
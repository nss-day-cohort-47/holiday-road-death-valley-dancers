console.log("heyyyyy hi hello")

import { useweatherForecast, getWeather } from "./data/WeatherProvider.js"
import { showWeather } from "./weather/weatherList.js"


const showWeatherList = () => {
    const weatherElement = document.querySelector(".weather");
    getWeather().then((response) => {
        console.log(response, "hi hey helloooo")
        weatherElement.innerHTML = showWeather(response.list);
    })
}

showWeatherList();

import { listParksInDropDown } from './dropdowns/listParkDropDown.js';
import { listAttractionsInDropDown } from './dropdowns/listAttractionsInDropDown.js';
import { listEateriesInDropDown } from './dropdowns/listEateriesInDropDown.js';

listParksInDropDown();
listAttractionsInDropDown();
listEateriesInDropDown();
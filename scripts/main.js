console.log("heyyyyy hi hello")

import { useweatherForecast, getWeather } from "./data/WeatherProvider.js"
import { showWeather } from "./weather/weatherList.js"
import { eateryList } from "./eateries/eateryList.js";
import { getEateries } from "./data/EateryProvider.js";
import { getAttraction, useAllAttractions } from "./data/AttractionProvider.js";
import { getParks, useAllParks } from "./data/ParkProvider.js";
import { attractionList } from "./attractions/attractionList.js";
import { listParksInDropDown } from './dropdowns/listParkDropDown.js';
import { listAttractionsInDropDown } from './dropdowns/listAttractionsInDropDown.js';
import { listEateriesInDropDown } from './dropdowns/listEateriesInDropDown.js';


const showWeatherList = () => {
    const weatherElement = document.querySelector(".weather");
    getWeather().then((response) => {
        console.log(response, "hi hey helloooo")
        weatherElement.innerHTML = showWeather(response.list);
    })
}

showWeatherList();


const showEateryList = () => {
    const eateryElement = document.querySelector(".eatery");
    getEateries().then((allEateries) => {
        eateryElement.innerHTML = eateryList(allEateries);
    })
}

showEateryList();

const showAttractionList = () => {
    const attractionElement = document.querySelector(".attraction");
    getAttraction().then((allAttractions) => {
        attractionElement.innerHTML = attractionList(allAttractions);
    })
}

showAttractionList();

listParksInDropDown();
listAttractionsInDropDown();
listEateriesInDropDown();
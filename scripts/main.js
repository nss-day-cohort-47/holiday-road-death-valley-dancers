console.log("main is loaded")

import { getWeather } from "./data/WeatherProvider.js"
import { showWeather } from "./weather/weatherList.js"
import { eateryList } from "./eateries/eateryList.js";
import { getEateries } from "./data/EateryProvider.js";
import { getAttraction } from "./data/AttractionProvider.js";
import { getParks } from "./data/ParkProvider.js";
import { attractionList } from "./attractions/attractionList.js";
import { listParksInDropDown } from './dropdowns/listParkDropDown.js';
import { listAttractionsInDropDown } from './dropdowns/listAttractionsInDropDown.js';
import { listEateriesInDropDown } from './dropdowns/listEateriesInDropDown.js';
import { parkObj } from './parks/parkObj.js';
import { filterAttractionsByState } from './dropdowns/filterAttractions.js';
import { filterEateriesByState } from './dropdowns/filterEateries.js';

const showWeatherList = () => {
    const weatherElement = document.querySelector(".weather");
    getWeather().then((response) => {
        weatherElement.innerHTML = showWeather(response);
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

//////////////////////ADD EVENT LISTENERS HERE\\\\\\\\\\\\\\\\\\\\

const mainElement = document.querySelector('body')

mainElement.addEventListener("change", event => {
    if (event.target.id === "parkDropDown") {
        const selectedParkIndex = event.target.options.selectedIndex;
        const selectedParkValue = event.target.options[selectedParkIndex].value;
        
        renderSelectedPark(selectedParkValue);
        
        showFilteredAttractions(selectedParkValue);
        showFilteredEateries(selectedParkValue);
    }
})

//Functions for event listeners/////////////////////////////////////////

const renderSelectedPark = (value) => {
    getParks()
        .then(response => {
            let filtered = [];
            response.filter(eachPark => {
                if (eachPark.parkCode === value) {
                    filtered.push(eachPark)
                }
            })
            return filtered;
        })
        .then(arrayWithPark => {
            const parkPreviewElement = document.querySelector('.park');
            parkPreviewElement.innerHTML = parkObj(arrayWithPark[0])
            //console.log(arrayWithPark[0].addresses[0].city)
        })
}

const showFilteredAttractions = (parkCode) => {
    getParks()
    .then(arrOfParks => {
        let parkObj = {};
        for (const eachPark of arrOfParks) {
            if (eachPark.parkCode === parkCode) {
                parkObj = eachPark
                break; //<<<<<<<<<<<<<<<<<<<<<<<<<This function takes in the park code of the selected park, then it gets that park as an object...
            } //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<then it gets the state code of that object.
        }
        return parkObj
    })
    .then(obj => {
        const stateCode = obj.addresses[0].stateCode;
        return stateCode
    })
    .then(state => {
        const filteredArr = filterAttractionsByState(state)
        listAttractionsInDropDown(filteredArr)
    })
}


const showFilteredEateries = (parkCode) => {
    getParks()
    .then(arrOfParks => {
        let parkObj = {};
        for (const eachPark of arrOfParks) {
            if (eachPark.parkCode === parkCode) {
                parkObj = eachPark
                break; //<<<<<<<<<<<<<<<<<<<<<<<<<This function takes in the park code of the selected park, then it gets that park as an object...
            } //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<then it gets the state code of that object.
        }
        return parkObj
    })
    .then(obj => {
        const stateCode = obj.addresses[0].stateCode;
        return stateCode
    })
    .then(state => {
        const filteredArr = filterEateriesByState(state)
        listEateriesInDropDown(filteredArr)
    })
}

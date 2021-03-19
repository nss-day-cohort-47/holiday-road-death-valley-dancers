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
import { asideObj } from './aside/asideObj.js';
import { asideList } from './aside/asideList.js';
import { getSavedItinerary } from './aside/asideProvider.js'

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
function toggleEateryView() {
    const eateryDetailsLocation = document.querySelector(".eateryDetails");
    if (eateryDetailsLocation.style.display === "block") {
        eateryDetailsLocation.style.display = "none";
    } else {
        eateryDetailsLocation.style.display = "block";
    }
}

mainElement.addEventListener("click", event => {
    if (event.target.id === "eateryButton") {
        console.log("your button is working")
        toggleEateryView();
    }
})
const attractionButton = () => {
    const location = document.querySelector(".attractionDetails");
    if (location.style.display === "block") {
        location.style.display = "none";
    } else {
        location.style.display = "block";
    }
}

mainElement.addEventListener('click', event => {
    if (event.target.id === 'attractionButton') {
        attractionButton()
    }
}
)

//event listener for save button. 
//*TODO: 
/*1. Listen to the button on the Dom. 
2. Create a click event on that location. 
3. Create if statement that looks to Park Name, Eatery Name, and Attraction Name and stores those key values in an object. 
4. That Object is converted to json then sent and stored in the json array via a function. 
5. Json data is propogating and stored within the aside.*/
//Note: Save button must be disabled untill the Park, attraction, and eatery have been selected.
//click event for save button
mainElement.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.id === "submit") {
        const parkName = document.querySelector(".parkTitle").innerText
        const eateryName = document.querySelector(".eateryTitle").innerText
        const attractionName = document.querySelector(".attractionTitle").innerText

        const itineraryObj = {
            park: parkName,
            eatery: eateryName,
            attraction: attractionName
        }
        saveItineraryObj(itineraryObj);
        postSavedItinerary();
    }
})
//saves Itinerary to local api
const saveItineraryObj = (obj) => {
    const jsonObj = JSON.stringify(obj);
    fetch(' http://localhost:8088/itineraries', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: jsonObj
    })
}
//pulls data from local api and displays to aside element
const postSavedItinerary = () => {
    const asideElement = document.querySelector(".savedItineraries");
    getSavedItinerary().then((savedItineraries) => {
        asideElement.innerHTML += asideList(savedItineraries);
    })
}

postSavedItinerary();

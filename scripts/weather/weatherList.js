import { Weather } from "./weatherObj.js"

export const showWeather = (forecast) => {   //declaring the function looking for a parameter
    let weatherHTML = "";                   // setting an empty string as a variable
    for (const oneForecast of forecast) {   // for of loop looking for one item of the passed in parameter

        weatherHTML += Weather(oneForecast)  // calls the function Weather with the looped item and puts it in a string
    }
    return weatherHTML;
}
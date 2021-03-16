import { Weather } from "./weatherObj.js"

export const showWeather = (forecast) => {
    let weatherHTML = "";
    for (const oneForecast of forecast) {

        weatherHTML += Weather(oneForecast)
    }
    return weatherHTML;
}
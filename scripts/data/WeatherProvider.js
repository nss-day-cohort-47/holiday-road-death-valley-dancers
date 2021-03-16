import { settings } from "../Settings.js"

let weatherForecast = [];

export const getWeather = () => {

    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Nashville,TN,840&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(parsedResponse => {
            console.log(parsedResponse.list)
            weatherForecast = parsedResponse;
            return parsedResponse;
        })
}

export const useweatherForecast = () => {
    return [...weatherForecast]
}

console.log(weatherForecast);
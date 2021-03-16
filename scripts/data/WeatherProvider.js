//import { settings } from "../Settings.js"

let weatherForecast = [];

export const getWeather = () => {

    return fetch(`http: //api.openweathermap.org/data/2.5/forecast?id=524901&appid=e78bff76cd169fd6088b48c66c3fd622`)
        .then(response => response.json())
        .then(parsedResponse => {
            weatherForecast = parsedResponse;
            return parsedResponse;
        })
}

export const useweatherForecast = () => {
    return [...weatherForecast]
}
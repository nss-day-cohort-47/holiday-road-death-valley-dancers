import { settings } from "../Settings.js"

let weatherForecast = [];

export const getWeather = (obj) => {

    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${obj.addresses[0].city},${obj.addresses[0].stateCode},840&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(parsedResponse => {            
            weatherForecast = parsedResponse.list;
            let filteredWeather = [];
            for (let i = 0; i < weatherForecast.length; i++) {
                if (i === 0 || i === 7 || i === 15 || i === 23 || i === 31) {
                    filteredWeather.push(weatherForecast[i])
                }
            }
            weatherForecast = filteredWeather;
            return filteredWeather;
        })
}

export const useweatherForecast = () => {
    return [...weatherForecast]
}
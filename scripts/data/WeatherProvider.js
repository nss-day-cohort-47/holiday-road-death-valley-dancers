import { settings } from "../Settings.js"

let weatherForecast = [];

export const getWeather = () => {

    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Hodgenville,KY,840&units=imperial&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(parsedResponse => {
            console.log(parsedResponse.list)

            weatherForecast = parsedResponse.list;
            let filteredWeather = [];
            for (let i = 0; i < weatherForecast.length; i++) {
                if (i === 0 || i === 7 || i === 15 || i === 23 || i === 31) {
                    filteredWeather.push(weatherForecast[i])
                }
            }
            console.log(filteredWeather);
            weatherForecast = filteredWeather;
            return filteredWeather;
        })
}

export const useweatherForecast = () => {
    return [...weatherForecast]
}

console.log(weatherForecast);
import { settings } from "../Settings.js"
// weatherForecast array
let weatherForecast = [];
// getWeather function; will need to insert a parameter at some point
export const getWeather = (obj) => {
    // fetch call is where the information you store on the DOM comes from
    // added city & state & obj parameter lol so code is broke atm 
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
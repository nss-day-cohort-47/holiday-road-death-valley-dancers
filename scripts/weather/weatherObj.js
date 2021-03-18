export const Weather = (weatherObj) => {
    return `
    <div class="weather">
        <h1>Weather - 5 Day Forecast</h1>
        <ul>
        <li class="temp">Temp: ${weatherObj.main.temp}</li>
        <li class="high">High: ${weatherObj.main.temp_max}</li>
        <li class="low">Low: ${weatherObj.main.temp_min}</li>
        <li class="feels">Feels Like: ${weatherObj.main.feels_like}</li>
        <li class="humid">Humidity: ${weatherObj.main.humidity}</li>
        </ul>
    </div>
    `
}
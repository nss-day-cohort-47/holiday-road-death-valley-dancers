export const Weather = (weatherObj) => { //the weather object as HTML. Will accept an item from a loop += into a string
    return `
    <div class="weather">
        <h1>Weather - Day 1 Forecast</h1>
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
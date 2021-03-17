export const Weather = (weatherObj) => {
    return `
    <div class="weather">
        <h2 class="">${weatherObj.main.temp}</h2>
    </div>
    `
}
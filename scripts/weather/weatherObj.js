export const Weather = (weatherObj) => {        //the weather object as HTML. Will accept an item from a loop += into a string
    return `
    <div class="weather">
        <h2 class="">${weatherObj.main.humidity}</h2>
    </div>
    `
}
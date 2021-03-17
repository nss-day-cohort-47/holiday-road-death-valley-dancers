//Creating "object card" for attraction data

export const attractionObj = (obj) => {
    return `
    <h2 class="attractionName>${obj.name}</h2>
    <ul class="attractionDetails">
    <li>City:${obj.city}</li>
    <li>Description:${obj.description}</li>
    <li>Souvenirs?: ${obj.ameneties.souvenirs === true ? "Yes!":"No..."}</li>
    <li>Restrooms?: ${obj.ameneties.restrooms === true ? "Yes!":"No..."}</li>
    </ul>
    <button class="attractionButton">Details</button>
    `
}
//Creating "object card" for attraction data

export const attractionObj = (obj) => {
    return `
    <h3 class="attractionName>${obj.name}</h3>
    <ul class="attractionDetails">
    <li>City:${obj.city}</li>
    <li>Description:${obj.description}</li>
    <li>Souvenirs?: ${obj.ameneties.souvenirs === true ? "Yes!":"No..."}</li>
    <li>Restrooms?: ${obj.ameneties.restrooms === true ? "Yes!":"No..."}</li>
    </ul>
    <button class="attractionButton">Details</button>
    `
}
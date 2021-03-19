export const eatery = (eateryObj) => {
    return `<h3 class= "eateryTitle">${eateryObj.businessName}</h3>
        <ul class="eateryDetails">
            <li>${eateryObj.description}</li>
            <li>${eateryObj.city}, ${eateryObj.state}</li>
            <li>Wifi?: ${eateryObj.ameneties.wifi ? 'Yes!':'No...'}</li>
            <li>Restrooms?: ${eateryObj.ameneties.restrooms ? 'Yes!':'No...'}</li>
            <li>Playground?: ${eateryObj.ameneties.playground ? 'Yes!':'No...'}</li>
        </ul>
        <button id="eateryButton">Details</button>`
}
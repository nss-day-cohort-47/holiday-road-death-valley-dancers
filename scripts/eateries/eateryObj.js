export const eatery = (eateryObj) => {
    return `<h3>${eateryObj.businessName}</h3>
        <ul class="eateryDetails">
            <li>${eateryObj.description}</li>
            <li>${eateryObj.city}</li>
            <li>${eateryObj.state}</li>
            <li>${eateryObj.ameneties.wifi}</li>
            <li>${eateryObj.ameneties.restrooms}</li>
            <li>${eateryObj.ameneties.playground}</li>
        </ul>
        <button id="eateryButton">Details</button>`
}
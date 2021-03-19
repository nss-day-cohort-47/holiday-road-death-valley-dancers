export const parkObj = (obj) => {    
    return `
        <h1 class= "parkTitle">${obj.fullName}</h1>
        <img src="${obj.images[0].url}" alt="park">
        <button class=${obj.parkCode} id="parkButton">Details</button>
    `
}

export const parkDetailObj = (obj) => {
    return `
    <h1>${obj.fullName}</h1>
    <p>${obj.description}</p>
    <p>${obj.addresses[0].line1}</p>
    <p>${obj.addresses[0].line2}</p>
    <p>${obj.addresses[0].city}, ${obj.addresses[0].stateCode} ${obj.addresses[0].postalCode}</p>
    <p>${obj.directionsInfo}</p>
    <button class=${obj.parkCode} id="parkButton">Details</button>
    `
}
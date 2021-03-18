const optionsList = (obj) => {
    return `
        <option value="${obj.id}">${obj.name}</option>
    `
}

export const listAttractionsInDropDown = (arr) => {
    let dropdownHTML = '';
    const DOMSelector = document.querySelector('#attractionDropDown');
    for (const eachObj of arr) {
        dropdownHTML += optionsList(eachObj)
    }
    DOMSelector.innerHTML = '<option selected disabled>Attraction Locations</option>'+dropdownHTML
}

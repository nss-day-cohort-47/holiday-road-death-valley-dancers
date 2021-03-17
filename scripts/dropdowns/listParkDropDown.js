import {getParks} from '../data/ParkProvider.js';

const optionsList = (obj) => {
    return `
        <option value="${obj.parkCode}">${obj.fullName}</option>
    `
}

export const listParksInDropDown = () => {
    let dropdownHTML = '';
    const DOMSelector = document.querySelector('#parkDropDown');
    getParks()
    .then(arr => {
        for (const eachObj of arr) {
            dropdownHTML += optionsList(eachObj)
        }
        DOMSelector.innerHTML += dropdownHTML
    })

}
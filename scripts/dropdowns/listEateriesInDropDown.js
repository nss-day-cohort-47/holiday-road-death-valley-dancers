import {getEateries} from '../data/EateryProvider.js';

const optionsList = (obj) => {
    return `
        <option value="${obj.id}">${obj.businessName}</option>
    `
}

export const listEateriesInDropDown = () => {
    let dropdownHTML = '';
    const DOMSelector = document.querySelector('#eateryDropDown');
    getEateries()
    .then(arr => {
        for (const eachObj of arr) {
            dropdownHTML += optionsList(eachObj)
        }
        DOMSelector.innerHTML += dropdownHTML
    })

}
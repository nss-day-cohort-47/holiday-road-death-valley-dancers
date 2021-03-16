import {getAttraction} from '../data/AttractionProvider.js';

const optionsList = (obj) => {
    return `
        <option value="${obj.id}">${obj.name}</option>
    `
}

export const listAttractionsInDropDown = () => {
    let dropdownHTML = '';
    const DOMSelector = document.querySelector('#attractionDropDown');
    getAttraction()
    .then(arr => {
        for (const eachObj of arr) {
            dropdownHTML += optionsList(eachObj)
        }
        DOMSelector.innerHTML += dropdownHTML
    })

}
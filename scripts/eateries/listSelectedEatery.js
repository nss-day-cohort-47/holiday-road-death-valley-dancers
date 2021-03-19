import {eatery} from './eateryObj.js';

export const showSelectedEatery = (obj) => {
    let HTML = eatery(obj);
    const DOMselector = document.querySelector('.eatery');
    DOMselector.innerHTML = HTML
}
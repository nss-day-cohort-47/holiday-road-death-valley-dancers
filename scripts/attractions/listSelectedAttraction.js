import { attractionObj } from "./attractionObj.js";

export const showSelectedAttraction = (obj) => {
    let HTML = attractionObj(obj);
    const DOMselector = document.querySelector('.attraction')
    DOMselector.innerHTML = HTML;
}
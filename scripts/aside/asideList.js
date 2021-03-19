import {asideObj } from "./asideObj.js";

export const asideList = (list) => {
    let asideHTML = "";
    for (const obj of list) {
        asideHTML += asideObj(obj)
    }
    return asideHTML;
}
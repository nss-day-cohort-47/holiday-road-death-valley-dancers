import { attractionObj } from "./attractionObj.js";


export const attractionList = (list) => {
    let attractionHTML = "";
    for (const obj of list) {
        attractionHTML += attractionObj(obj)
    }
    return attractionHTML;
}
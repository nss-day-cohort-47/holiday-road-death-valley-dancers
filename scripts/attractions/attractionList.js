import {attractionObj} from "./attractionObj.js";

//Iterating over data in HTML format and storing in a variable
export const attractionList = (list) => {
    let attractionHTML = "";
    for (const obj of list) {
        attractionHTML += attractionObj(obj)
    }
    return attractionHTML;
}
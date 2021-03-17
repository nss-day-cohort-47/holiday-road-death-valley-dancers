import { eatery } from "./eateryObj.js"

export const eateryList = (list) => {
    let eateryListHTML = "";

    for (const obj of list) {
        eateryListHTML += eatery(obj);
    }
    return eateryListHTML;
}

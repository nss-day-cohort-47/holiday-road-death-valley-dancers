import { getEateries } from "../data/EateryProvider.js"
import { eatery } from "./eateryObj.js"

// export const eateryList = () => {
//     const eateryDOMLocation = document.querySelector(".eatery");
//     let eateryListHTML = "";
//     const eateryCollection = getEateries()
//     .then(response) => {
//     for (const oneEatery of eateryCollection) {
//         eateryListHTML += eatery(oneEatery);
//     }
//     eateryDOMLocation.innerHTML = eateryListHTML;
// }

export const eateryList = () => {
    let eateryListHTML = "";

    const eateryDOMLocation = document.querySelector(".eatery");

   allEateries = getEateries()
   .then

    for (const oneEatery of allEateries) {
        eateryListHTML += eatery(oneEatery);
    }
    eateryDOMLocation.innerHTML = eateryListHTML;

}
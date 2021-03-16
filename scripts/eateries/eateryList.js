import { getEateries } from "../data/EateryProvider.js"
import { eatery } from "./eateryObj.js"

export const eateryList = () => {
    const eateryDOMLocation = document.querySelector(".eatery");
    let eateryListHTML = "";
    getEateries()
        .then(response => {
            for (const oneEatery of response) {
                eateryListHTML += eatery(oneEatery);
            }
            eateryDOMLocation.innerHTML = eateryListHTML;
        }

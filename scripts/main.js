console.log("main is loaded");

import { eateryList } from "./eateries/eateryList.js";
import { getEateries } from "./data/EateryProvider.js";

const showEateryList = () => {
	const eateryElement = document.querySelector(".eatery");
	getEateries().then((response) => {
		eateryElement.innerHTML = eateryList(response);
	})
}

showEateryList();
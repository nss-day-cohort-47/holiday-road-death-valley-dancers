console.log("main is loaded");

import { eateryList } from "./eateries/eateryList.js";
import { getEateries } from "./data/EateryProvider.js";

const showEateryList = () => {
	const eateryElement = document.querySelector(".eatery");
	getEateries().then((allEateries) => {
		eateryElement.innerHTML = eateryList(allEateries);
	})
}

showEateryList();
import {listParksInDropDown} from './dropdowns/listParkDropDown.js';
import {listAttractionsInDropDown} from './dropdowns/listAttractionsInDropDown.js';
import {listEateriesInDropDown} from './dropdowns/listEateriesInDropDown.js';

listParksInDropDown();
listAttractionsInDropDown();
listEateriesInDropDown();

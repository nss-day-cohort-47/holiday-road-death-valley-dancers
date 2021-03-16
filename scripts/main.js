console.log("main is loaded");

import {getAttraction, useAllAttractions } from "./data/AttractionProvider.js";
import {getEateries, useAllEateries} from "./data/EateryProvider.js";
import {getParks, useAllParks} from "./data/ParkProvider.js";
import {attractionList} from "./attractions/attractionList.js";

//showing lists on the DOM
const showAttractionList = () => {
    const attractionElement = document.querySelector(".attraction");
    getAttraction().then((allAttractions) => {
      attractionElement.innerHTML = attractionList(allAttractions);
    })
  }

  showAttractionList();
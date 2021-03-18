import {useAllEateries} from '../data/EateryProvider.js';

export const filterEateriesByState = (state) => {
    let filteredArr = [];
    let fullArr = useAllEateries();
    for (const eachEat of fullArr) {
        if (eachEat.state === state) {
            filteredArr.push(eachEat)
        }
    }
    return filteredArr
}
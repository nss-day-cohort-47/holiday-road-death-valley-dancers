import {useAllAttractions} from '../data/AttractionProvider.js'

export const filterAttractionsByState = (state) => {
    let filteredArr = []
    let fullArr = useAllAttractions()
        for (const eachAttr of fullArr) {
            if (eachAttr.state === state) {
                filteredArr.push(eachAttr)
            }
        }
        return filteredArr
}
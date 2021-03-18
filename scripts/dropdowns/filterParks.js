
import {useAllParks} from '../data/ParkProvider.js';
import {parkObj} from '../parks/parkObj.js';
const mainElement = document.querySelector('main')


mainElement.addEventListener("change", event => {
    if (event.target.id === "parkDropDown") {
        const selectedParkIndex = event.target.options.selectedIndex;

        renderSelectedPark(event.target.options[selectedParkIndex].value)
    }
}
)

const renderSelectedPark = (value) => {
    const filtered = useAllParks().filter(eachPark => {
        if (eachPark.parkCode === value) {
            return eachPark
        }
    })
    console.log(filtered)
    const parkPreviewElement = document.querySelector('.park');
    //parkPreviewElement.innerHTML = parkObj()
}








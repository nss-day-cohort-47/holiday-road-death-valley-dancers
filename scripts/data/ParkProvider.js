import { settings } from '../Settings.js'

let allParks = [];

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
        .then(parsedResponse => {
            allParks = parsedResponse.data;
            return parsedResponse.data;
        })

}

export const useAllParks = () => {
    return [...allParks]
}
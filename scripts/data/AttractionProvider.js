let allAttractions = [];

export const getAttraction = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        allAttractions = parsedResponse;
        return parsedResponse;
    })
};

export const useAllAttractions = () => {
return [...allAttractions] 
}
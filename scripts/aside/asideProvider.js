let savedItineraries = [];

export const getSavedItinerary = () => {
    return fetch('http://localhost:8088/itineraries')
    .then(response => response.json())
    .then(parsedResponse => {
        savedItineraries = parsedResponse;
        return parsedResponse;
    })
};

let allEateries = [];

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            console.log(parsedResponse);
            allEateries = parsedResponse;
            return parsedResponse;
        })
}

export const useAllEateries = () => {
    return [...allEateries]
}
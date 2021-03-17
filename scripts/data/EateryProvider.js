let eateryCollection = [];

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            console.log(parsedResponse);
            eateryCollection = parsedResponse;
            return parsedResponse;
        })
}

export const useAllEateries = () => {
    return [...eateryCollection]
}
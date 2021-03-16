let allEateries = []

export const getEateries = () => {
	return fetch("http://holidayroad.nss.team/eateries")
	.then(response => response.json)
    .then(parsedResonse => {
        allEateries = parsedResponse;
        return parsedResonse;
    })
}

export const useAllEteries = () => {
    return [...allEateries]
}
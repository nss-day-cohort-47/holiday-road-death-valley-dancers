const optionsList = (obj) => {
    return `
        <option value="${obj.id}">${obj.businessName}</option>
    `
}

export const listEateriesInDropDown = (arr) => {
    let dropdownHTML = '';
    const DOMSelector = document.querySelector('#eateryDropDown');
    for (const eachObj of arr) {
        dropdownHTML += optionsList(eachObj)
    }
    DOMSelector.innerHTML = '<option selected disabled>Eateries</option>'+dropdownHTML
}

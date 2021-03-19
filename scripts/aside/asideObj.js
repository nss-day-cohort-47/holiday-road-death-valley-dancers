export const asideObj = (obj) => {
    return `
    <div class="asideBorder">
    <ul>
    <li>Park: ${obj.park}</li>
    <br>
    <li>Eatery: ${obj.eatery}</li>
    <br>
    <li>Attraction: ${obj.attraction}</li>
    </ul>
    <div>
`
}
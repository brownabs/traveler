import API from "./dataManager"

let displayInterestForm = () => {

       let interestForm = document.querySelector("#interestsFormContainer")

    let interestFormHTML = `
    <div>
    <fieldset id="interestContainer">
    <input type="hidden" id="interestId">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name">
    <label for="description">Description:</label>
    <textarea type="text" name="description" id="description"></textarea>
    <label for="cost">Cost:</label>
    <input type="text" cost="cost" id="cost">
    <label for="review">Review:</label>
    <textarea type="text" name="review" id="review"></textarea>
    <label for="placesOption">Place</label>
    <select id="placesOption"></select>
    </fieldset>
    <button id="addNewInterest">
    Add New Interest!
    </button>
    </div>
    `

    interestForm.innerHTML = interestFormHTML

        
        const createPlacesDropdown = place => `
        <option value="${place.id}">${place.name}</option>
    `

        let allPlaces = []

        API.getPlaces()
        .then(placesArray => {
            allPlaces = placesArray
            allPlaces.forEach(
                (place) => {
                    const html = createPlacesDropdown(place)
                    document.querySelector("#placesOption").innerHTML += html 

                }
            )
            return allPlaces
        })

}
          




export default displayInterestForm
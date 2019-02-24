/* this page will listen for the button in the form to be clicked and then store that in a new object that will 
   post to the API
*/
import APIManager from "./dataManager"
import displayNewsInterests from "./displayInterests"

let postNewInterest = () => {

    document.querySelector("#addNewInterest").addEventListener("click", () => {
     
        console.log("button clicked")
        let name = document.querySelector("#name").value
        let description = document.querySelector("#description").value
        let cost = document.querySelector("#cost").value
        let review = document.querySelector("#review").value
        let placeId = document.querySelector("#placesOption").value
        
     const newInterest = {
         name : name, 
         description: description,
         cost: cost,
         review: review,
         placeId: parseInt(placeId) 
     }
        
        APIManager.postNewInterest(newInterest)
        .then(displayNewsInterests)

    })
    }
    


export default postNewInterest
import API from "./dataManager"
 
import createInterestElement from "./interests"


const displayInterests = () => {
   

    API.getInterest()
        .then(
            (interestObjects) => {
                console.log(interestObjects)
                let interestListEl = document.querySelector("#interestsList")
                interestListEl.innerHTML = ""
                
                interestObjects.forEach((currentObject) => {
                        console.log(currentObject)
                    
                    let interestHTML = createInterestElement(currentObject)
                   
                    interestListEl.innerHTML += interestHTML
                })
            }
        )

}


export default displayInterests

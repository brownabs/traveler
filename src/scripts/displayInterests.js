import API from "./dataManager"
 
import interest from "./interests"


const displayInterests = () => {
   
    // const userId = document.getElementById("userId").value
    API.getInterest()
        .then(
            (interestObjects) => {
                console.log(interestObjects)
                let interestListEl = document.querySelector("#interestsList")
                interestListEl.innerHTML = ""
                
                interestObjects.forEach((currentObject) => {
                        console.log(currentObject)
                    
                    let interestHTML = interest(currentObject)
                   
                    interestListEl.innerHTML += interestHTML
                })
            }
        )

}


export default displayInterests

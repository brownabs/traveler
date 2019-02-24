//this function will allow user to delete selected interest

import API from "./dataManager"
import displayInterests from "./displayInterests";

let deleteInterest = () => {
  document.querySelector("#interestsList").addEventListener("click", () => {

    if (event.target.id.startsWith("deleteButton--")) {
      let interestId = event.target.id.split("--")[1];
      console.log("delete button clicked")

      var deletePrompt = prompt("Please enter yes if you would like to delete your interest.");

      if (deletePrompt === "yes") {
        API.deleteInterest(interestId)
        .then(() => {
          displayInterests()
        })


      }
    }
  })
}

export default deleteInterest 
//this function will allow user to edit or delete selected interest

import API from "./dataManager"
import displayInterests from "./displayInterests";

let deleteInterest = () => {
  document.querySelector("#interestsList").addEventListener("click", () => {

    if (event.target.id.startsWith("deleteButton--")) {
      let interestId = event.target.id.split("--")[1];
      console.log("delete button clicked")
      //there is going to be a prompt() instead of automatically deleting the interest
      //will prompt have an event listener that listens for the cancel button to clicked?
      //haven't done prompts since prework

      var deletePrompt = prompt("Please enter yes if you would like to delete your interest?");

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
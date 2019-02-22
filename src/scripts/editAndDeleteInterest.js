//this function will allow user to edit or delete selected interest



let editAndDeleteInterest = () => {
    document.querySelector("#interestsList").addEventListener("click", () => {
  
      if (event.target.id.startsWith("deleteButton--")) {
  
        console.log("delete button clicked")
        //there is going to be a prompt() instead of automatically deleting the interest
        //will prompt have an event listener that listens for the cancel button to clicked?
        //haven't done prompts since prework

        prompt()
  
        } else if (event.target.id.startsWith("editButton--")) {
          let articleId = event.target.id.split("--")[1];
          console.log("edit button clicked")
      }
    })
  }

  export default editAndDeleteInterest 
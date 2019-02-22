//PURPOSE : this will create the interest element with interest name, description, and place associated

//Steve, I cannot figure out for the life of me why I'm displaying an edit and delete button at the bottom of my 
//// this code will list place associated with interest 
//<div>${placesList.place}</div>

const createInterestElement = (interest, places) => {
    // const placesList = places.find(p => parseInt(p.id) === interest.place) 
    return `
    <section id="interestElement">
                <h3>${interest.name}</h3>
                <div>${interest.description}</div>
                <div>${interest.cost}</div>
                <div>${interest.review}</div>
                <button id="deleteButton--${interest.id}">Delete</button>
                <button id="editButton--${interest.id}">Edit</button>
    </section>
   
    `
}

export default createInterestElement
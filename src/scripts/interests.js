//PURPOSE : this will create the interest element with interest name, description, and place associated


//<div>${placesList.placeId}</div>
//<div>${interest.placeId.name}</div>

const createInterestElement = (interest) => {
    // const placesList = places.find(p => parseInt(p.id) === interest.placeId) 
    return `
    <section id="interestElement">
                <h3>${interest.name}</h3>
                <div>${interest.description}</div>
                <div>${interest.cost}</div>
                <div>${interest.review}</div>
                <div>${interest.place.name}</div>
                <button id="deleteButton--${interest.id}">Delete</button>
    </section>
   
    `
}

export default createInterestElement
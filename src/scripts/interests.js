const interest = (interestObject) => {
    return `
        <section>
            <h3>${interestObject.name}</h3>
            <div>${interestObject.description}</div>
            <option value="${interestObject.id}">${interestObject.name}</option>
            <button id="deleteButton--${interestObject.id}">Delete</button>
            <button id="editButton--${interestObject.id}">Edit</button>
        </section>`
}

export default interest

const API = {
    getInterest: () => {
    return fetch("http://localhost:8088/interests?_expand=place")
        .then(res => res.json())
},
getOneInterest: (id) => {
    return fetch(`http://localhost:8088/interests/${id}`)
        .then(res => res.json())
},

postNewInterest: (newInterest) => {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterest)
    })
},

deleteInterest: (interestId) => {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "DELETE",
    })
}, 

getPlaces: () => {
    return fetch("http://localhost:8088/places")
    .then(res => res.json())
}
}

export default API

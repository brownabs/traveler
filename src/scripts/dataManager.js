const API = {
    getInterest: () => {
    return fetch("http://localhost:8088/interests")
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

editInterest: (interestId, newInterestObject) => {
    return fetch(`http://localhost:8088/articles/${interestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestObject)
    })
},

deleteInterest: (interestId) => {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "DELETE",
    })
}
}

export default API

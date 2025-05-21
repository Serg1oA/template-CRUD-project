// server.js
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    "21 savage": {
        'age': 29,
        'birthName': "Shéyaa Bin Abraham-Joseph",
        'birthLocation': "London, England"
    },
    "chance the rapper": {
        'age': 31,
        'birthName': "Chancelor Bennet",
        'birthLocation': "Chicago, Illinois"
    },
    "dylan": {
        'age': 99,
        'birthName': "some name",
        'birthLocation': "some birth location"
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const name = request.params.rapperName.toLowerCase()
    if (rappers[name]) {
        response.json(rappers[name])
    } else {
        response.json(rappers["dylan"])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
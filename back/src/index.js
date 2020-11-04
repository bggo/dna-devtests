const express = require('express')
const cors = require('cors')

const routes = require('./routes')
const producer = require('./Queue/producer')
const consume = require('./Queue/consume')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(producer)

app.listen(8000, () => console.log("Server is running..."))
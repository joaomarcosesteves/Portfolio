const express = require('express');
require('dotenv').config()
require('./server/mongo/mongoConnection')
const app = express()

const api = require('./server/routes')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        'sucess': true
    })
})

app.use('/api', api)

const PORT = process.env.PORT
app.listen(PORT)
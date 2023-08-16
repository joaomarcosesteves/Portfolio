require('dotenv').config()
require('./server/mongo/mongoConnection')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./server/routes')

app.use(bodyParser.json())
app.use('/api', api)

if ( process.env.NODE_ENV === 'production' ) {
    //all files
    app.use(express.static('client/build'))
    //html
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT
app.listen(PORT)
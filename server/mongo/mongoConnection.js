require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.URl_CONNECT_MONGO).
catch(error => console.log(error)).
then(console.log("connected to DB")) 
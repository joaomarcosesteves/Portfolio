const router = require('express').Router();
const sendEmail = require('./sendEmail')

router.get('/', (req, res) => {
    res.send('this route is exclusive for our server')
})

router.use('/sendemail', sendEmail)

module.exports = router

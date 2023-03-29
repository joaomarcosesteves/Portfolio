const router = require('express').Router();

const portfolio = require('./portfolio')

router.get('/', (req, res) => {
    res.send('this route is exclusive for our server')
})

router.use('/portfolio', portfolio)

module.exports = router
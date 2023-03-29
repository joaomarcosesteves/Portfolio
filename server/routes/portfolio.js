const router = require('express').Router();
const Portfolio = require('../models/Portfolio')
require('../mongo/mongoConnection')

router.post('/', (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    })

    portfolio
    .save()
    .then((data) => {
        res.json({
            success: true,
            data
        })
    })
    .catch((err) => {
        res.json({
            success: false,
            message: err
        })
    })
})

router.get('/', async (req, res) => {
    try{
        const portfolio = await Portfolio.find()
        res.json({
            'sucess': true,
            data: portfolio
        })
    }catch(err){
        res.json({
            'sucess': false,
            message: err
        })
    }
})

router.get('/:slug', async (req, res) => {
    try{
        const portfolioslug = await Portfolio.findOne({
            slug: req.params.slug
        })
        res.json({
            'sucess': true,
            data: portfolioslug
        })
    }catch(err){
        res.json({
            'sucess': false,
            message: err
        })
    }
})

router.patch('/:slug', async (req, res) => {
    try{
        const upPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        })
        res.json({
            success: true,
            updated: upPortfolio.modifiedCount
        })
    }catch(err){
        res.json({
            'sucess': false,
            message: err
        })
    }
})

router.delete('/:slug', async (req, res) => {
    try{
        const dePortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })
        res.json({
            'sucess': true,
            data: dePortfolio
        })
    }catch(err){
        res.json({
            'sucess': false,
             message: err
        })
    }
})





module.exports = router
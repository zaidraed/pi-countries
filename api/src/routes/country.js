const { Router } = require('express');
const { Sequelize } = require("sequelize");
const {Country, Activity} = require('../db');
const router = Router();
const {getDbInfo, getActivities} = require('../getApi')

router.get('/', async (rec, res, next)=> {
    return Country.findAll()
    .then((Country)=> {
        res.send(Country)
    })
})

router.post('/', (rec, res, next)=> {
    res.send('soy post desde country')
})

router.put('/', (rec, res, next)=> {
    res.send('soy put desde country')
})

router.delete('/', (rec, res, next)=> {
    res.send('soy delete desde country')
})



module.exports = router;

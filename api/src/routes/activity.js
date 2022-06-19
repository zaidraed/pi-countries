const { Router } = require('express');
const {Country, Activity} = require('../db');
const router = Router();
const {} = require('../getApi')

router.post('/', async (req, res) =>{
    try {
        let createActivity = await Activity.create(
                req.body[0]
        )
        
            req.body[1].forEach(async e =>{
            const CountriesPush = await Country.findOne({
                where: { id: e }
            })
            
                createActivity.addCountry(CountriesPush)
        })
        console.log(createActivity)
        res.json(createActivity)
    } catch (e) {
        res.status(404).send(e)
    }
})

// router.get('/', (rec, res, next)=> {
//     res.send('soy get desde Activity')
// })

// router.post('/', (rec, res, next)=> {
//     res.send('soy post desde Activity')
// })

// router.put('/', (rec, res, next)=> {
//     res.send('soy put desde Activity')
// })

// router.delete('/', (rec, res, next)=> {
//     res.send('soy delete desde Activity')
// })



module.exports = router;

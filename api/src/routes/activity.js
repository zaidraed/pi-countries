const { Router } = require('express');
const {Country, Activity} = require('../db');
const router = Router();
const {} = require('../getApi')

router.post('/', async (req, res) =>{

        const { name, dificulty, duration, season, ccid,  } = req.body
        const createActivity = await Activity.create({
            name,
            dificulty,
            duration,
            season,
            ccid,
        })
        
        const countries = await Country.findAll({
            where: {
                ccid: ccid,
            }
        })
        createActivity.addCountries(countries)
        res.status(200).send(createActivity)
    
    })
    router.get('/', async (req, res) => {
        const activities = await getActivities()
        res.status(200).send(activities)
    })

    const getActivities = async () => {
        const get = await Activity.findAll()
        return get;
    }



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

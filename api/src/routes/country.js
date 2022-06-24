const { Router } = require('express');
const {Country, Activity,Op} = require('../db');
const router = Router();
const {} = require('../getApi')

router.get("/", async function (req, res, next) {
    let { name, page, sort, continents} = req.query

    try {
        if(name) {
            let country = await Country.findAll({
                where: { name: { [Op.iLike]: `%${name}%` } },
                include: { model: Activity }
            }) 
            return country.length ? res.json(country) : res.sendStatus(404)
        
        }
        if(continents) {
            let country = await Country.findAll({
                where: { continents: { [Op.iLike]: `%${continents}%` } },
                include: { model: Activity }
            }) 
            return country.length ? res.json(country) : res.sendStatus(404)
        
        }
        if(page==="all"){
            let country = await Country.findAll(
                { include: { model: Activity } },
            )
            return country ? res.status(200).json(country) : res.sendStatus(404)
        }
        
        if (sort) {     
                    switch (sort) {
                        case "AtoZ":
                            return res.json(await Country.findAll({
                                order: [['name', 'ASC']],
                                include: {model: Activity},
                                
                            }))
                        case "ZtoA":
                            return res.json(await Country.findAll({
                                order: [['name', 'DESC']],
                                include: { model: Activity},
                                
                            }))
                        case "pobAsc":
                            return res.json(await Country.findAll({
                                order: [['population', 'ASC']],
                                include: {model: Activity},
                                
                            }))
                        case "pobDes":
                            return res.json(await Country.findAll({
                                order: [['population', 'DESC']],
                                include: {model: Activity},
                                
                            }))
                
                    case "default":
                                    return res.json(await Country.findAll({
                                        include: { model: Activity },
                                        
                                    }))
                }

            
            }

        


    }   catch (error) {
                next(error)
    }
})

router.get('/:idPais', async function (req, res) {
    try {
        let { idPais } = req.params
        let country = await Country.findByPk(
            idPais.toUpperCase(),
            { include: { model: Activity } }
        )
        country ? res.json(country) : res.sendStatus(404)


    } catch (error) {
        res.status(505).send(error)
    }
})


// router.get('/',(rec, res, next)=> {
//  
//     return Country.findAll()
//     .then((Country)=> {
//         res.send(Country)
//     })
//     .catch((error)=> {
//         next(error)
//     })
// })

// router.post('/', async (rec, res, next)=> {
//     try {
        
//         const {id, name} = rec.body;
//         const newCountry = await Country.create({
//             id,
//             name
//         })
//         res.status(201).send(newCountry)
//     } catch (error) {
//         next(error)
//     }
//     })
        

// router.put('/', (rec, res, next)=> {
//     res.send('soy put desde country')
// })

// router.delete('/', (rec, res, next)=> {
//     res.send('soy delete desde country')
// })



module.exports = router;

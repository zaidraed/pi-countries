const { Router } = require('express');
const router = Router();


router.get('/', (rec, res, next)=> {
    res.send('soy get desde Activity')
})

router.post('/', (rec, res, next)=> {
    res.send('soy post desde Activity')
})

router.put('/', (rec, res, next)=> {
    res.send('soy put desde Activity')
})

router.delete('/', (rec, res, next)=> {
    res.send('soy delete desde Activity')
})



module.exports = router;

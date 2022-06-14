const { Router } = require('express');
//const Activity = require('../models/Activity');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute = require('./Country.js');
const activityRoute = require('./Activity.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();

router.use('/country',countryRoute);
router.use('/activity',activityRoute);


module.exports = router;

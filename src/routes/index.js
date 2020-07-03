var express = require('express');
var router = express.Router();
var materiasController = require('../controller/materiasController')

/* GET home page. */
/**Se mostrara la pag pricnipal para elegir las practicas */
router.get('/', materiasController.index);

module.exports = router;

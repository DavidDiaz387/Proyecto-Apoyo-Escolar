var express = require('express');
var router = express.Router();

/**Controller de users */
let studentsController = require('../controller/studentsController')

/* GET users listing. */
router.get('/login',studentsController.login);
router.post('/loginDate',studentsController.loginDate);
router.get('/register',studentsController.register);
router.post('/registerDate',studentsController.registerDate);

module.exports = router;

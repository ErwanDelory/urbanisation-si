const express = require('express');
const authentificationControllers = require('../controllers/authentificationController');
const registerController = require('../controllers/registerController');

const router = express.Router();

//Authentification Controller
router.post('/auth', authentificationControllers.auth);
router.post('/register', registerController.register);

module.exports = router;

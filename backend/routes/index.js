const express = require('express');
const router = express.Router();
let User = require('../models/user');

// welcome and login
router.get('/', (req, res) => res.send('login'));

// register
router.get('/register', (req, res) => res.send('register'));



module.exports = router;
const express = require('express');

const router = express.Router();


router.use('/auth', require('./auth'));

router.use('/hotel', require('./hotel'));



module.exports = router;
const express = require('express');
const { hotelController } = require('../controllers')
const { verifyLogin } = require('../middlewares/verifylogin');
const router = express.Router();

router.post('/register-hotel', verifyLogin, hotelController.registerHotel);
router.get('/hotels', hotelController.getHotels)

module.exports = router;
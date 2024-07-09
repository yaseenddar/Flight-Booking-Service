const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();
const BookingRouter = require('./booking-route')
router.get('/info', InfoController.info);
router.use('/bookings',BookingRouter)
module.exports = router;
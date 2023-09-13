const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/verify'); // Import middleware for token verification and admin authorization
const { addTrain } = require('../controller/addTrain')
const { bookSeat } = require('../controller/bookSeat')
const { bookingDetails } = require('../controller/bookingDetails')
const { seatAvailability } = require('../controller/seatAvailability')

// Define routes for train-related operations
router.post('/create', isAdmin, addTrain); // Route to create a new train
router.get('/availability', seatAvailability); // Route to get train availability
router.post('/:train_id/book', verifyToken, bookSeat); // Route to book a seat on a train
router.get('/bookings/:booking_id', verifyToken, bookingDetails); // Route to get booking details

module.exports = router;
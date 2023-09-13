// 5. book a seat
// Sample in-memory database for trains

const trains = [
    {
        train_id: '9876543210',
        train_name: 'Express Train',
        source: 'Station A',
        destination: 'Station B',
        seat_capacity: 100,
    },
    {
        train_id: '9876543211',
        train_name: 'Express Train 2',
        source: 'Station A',
        destination: 'Station C',
        seat_capacity: 50,
    },
];
// Sample in-memory database for bookings
const bookings = [];

// Route to book a seat on a specific train
const bookSeat = (req, res) => {
    const { train_id } = req.params;
    const { user_id, no_of_seats } = req.body;
    // Find the train by train_id
    const train = trains.find((train) => train.train_id === train_id);
    if (!train) {
        return res.status(404).json({ message: 'Train not found' });
    }
    // Check if there are enough available seats
    if (train.seat_capacity < no_of_seats) {
        return res.status(400).json({ message: 'Not enough available seats' });
    }
    // Generate booking ID and seat numbers
    const booking_id = Math.floor(Math.random() * 10000000000).toString();
    const seat_numbers = Array.from(
        { length: no_of_seats },
        (_, index) => index + 1
    );
    // Update available seats
    train.seat_capacity -= no_of_seats;
    // Create a booking entry
    const booking = {
        booking_id,
        user_id,
        train_id,
        seat_numbers,
    };
    // Add the booking to the database
    bookings.push(booking);
    // Return booking details
    res.status(200).json({
        message: 'Seat booked successfully',
        booking_id,
        seat_numbers,
    });
}
module.exports = {bookSeat}
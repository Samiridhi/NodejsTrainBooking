// 6. get specific booking details
// Sample in-memory database for trains
const trains = [
    {
        train_id: '9876543210',
        train_name: 'Express Train',
        source: 'Station A',
        destination: 'Station B',
        seat_capacity: 100,
        arrival_time_at_source: '2023-01-01 14:00:00',
        arrival_time_at_destination: '2023-01-01 20:30:00',
    },
    // Add more train entries
];
// Sample in-memory database for bookings
const bookings = [
    {
        booking_id: '5432109876',
        user_id: '1234567890',
        train_id: '9876543210',
        no_of_seats: 1,
        seat_numbers: [7],
    },
    // Add more booking entries
];

// Route to get specific booking details
const bookingDetails = (req, res) => {
    const { booking_id } = req.params;
    // Find the booking by booking_id
    const booking = bookings.find((booking) => booking.booking_id === booking_id);
    if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
    }
    // Find the train associated with the booking
    const train = trains.find((train) => train.train_id === booking.train_id);
    if (!train) {
        return res.status(404).json({ message: 'Train not found' });
    }
    // Return booking and train details
    const response = {
        booking_id: booking.booking_id,
        train_id: train.train_id,
        train_name: train.train_name,
        user_id: booking.user_id,
        no_of_seats: booking.no_of_seats,
        seat_numbers: booking.seat_numbers,
        arrival_time_at_source: train.arrival_time_at_source,
        arrival_time_at_destination: train.arrival_time_at_destination,
    };
    res.status(200).json(response);
}
module.exports = {bookingDetails}
// 4. get seat availability
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

// Route to get seat availability for trains between source and destination
const seatAvailability =  (req, res) => {
    const { source, destination } = req.query;
    // Filter trains based on source and destination
    const availableTrains = trains.filter(
        (train) => train.source === source && train.destination === destination
    );
    // Calculate available seats for each train
    const response = availableTrains.map((train) => ({
        train_id: train.train_id,
        train_name: train.train_name,
        available_seats: train.seat_capacity, // In this example, assume all seats are available
    }));
    // Return the list of available trains and seats
    res.status(200).json(response);
}
module.exports = {seatAvailability}


// 3. add a new train
// Sample in-memory database for trains

const trains = [];

// Route to add a new train (for admin)
const addTrain = (req, res) => {
  const {
    train_name,
    source,
    destination,
    seat_capacity,
    arrival_time_at_source,
    arrival_time_at_destination,
  } = req.body;

  // Generate a unique train ID (you can use a library like 'uuid' for this)
  const train_id = Date.now().toString(); // This is just a simple example, not recommended for production

  // Create a new train object
  const newTrain = {
    train_id,
    train_name,
    source,
    destination,
    seat_capacity,
    arrival_time_at_source,
    arrival_time_at_destination,
  };

  // Add the new train to the database
  trains.push(newTrain);
  // Return a success response with the train ID
  res.status(200).json({
    message: 'Train added successfully',
    train_id,
  });

}
module.exports = {addTrain}

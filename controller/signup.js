// 1. register a user

// Sample in-memory user database

const users = []
// Generate a unique user ID (you can use a more sophisticated method)
function generateUserId() {
  return (Math.random() * 1000000).toFixed(0);
}

const signup = (req, res) => {

    const { username, password, email } = req.body;
    // Basic input validation
    if (!username || !password || !email) {
        return res.status(400).json({ error: 'Invalid request data' });
    }
    // Check if the username or email is already registered
    if (users.some((user) => user.username === username || user.email === email)) {
        return res.status(409).json({ error: 'Username or email already exists' });
    }
    // Generate a unique user ID
    const userId = generateUserId();
    // Create a new user object
    const newUser = {
        userId,
        username,
        password,
        email,
    };
    // Add the user to the database
    users.push(newUser);
    // Return a success response
    res.status(201).json({
        status: 'Account successfully created',
        status_code: 201,
        user_id: userId,
    });
}
module.exports = {signup}


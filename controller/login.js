
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // For generating JWT tokens

// 2. login user
// Sample in-memory user database

const users = [
    {
        userId: '12345',
        username: 'example_user',
        password: 'example_password',
        email: 'user@example.com',
    },
];

// Secret key for JWT token generation (you should use a strong secret in production)
const secretKey = 'your-secret-key';

// Route to handle user login
const login = (req, res) => {
    const { username, password } = req.body;
    // Find the user by username
    const user = users.find((user) => user.username === username);
    // Check if the user exists and the password is correct
    if (user && user.password === password) {
        // Generate a JWT token for the user
        const token = jwt.sign({ userId: user.userId }, secretKey, {
            expiresIn: '1h', // Token expiration time
        });
        // Return a success response with the token
        res.status(200).json({
            status: 'Login successful',
            status_code: 200,
            user_id: user.userId,
            access_token: token,
        });
    } else {
        // Return a failure response for incorrect username or password
        res.status(401).json({ status: 'Incorrect username or password' });
    }
}
module.exports = {login}

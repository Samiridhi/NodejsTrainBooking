const express = require('express');
const app = express();
const verifyToken = require('./middleware/verify')
const trainRoutes = require('./routes/trainRoutes')
const authRoutes = require('./routes/authRoutes')

console.log('trainroutes: ', trainRoutes)
console.log('authroutes: ', authRoutes)

app.use('/api', authRoutes)
app.use('/api/trains', trainRoutes)



// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
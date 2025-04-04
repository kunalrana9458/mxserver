const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/auth"); // Import Routes
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Sample Route
app.get('/', (req, res) => {
  res.send('Backend is running Started...');
});

app.use('/api', userRoutes); // Use Signup Route

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

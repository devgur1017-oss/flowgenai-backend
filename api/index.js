require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Sample endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'FlowGenAI Backend Live!' });
});

// Export for Vercel serverless
module.exports = app;

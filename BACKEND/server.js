// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/certificateVerifier', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for certificates
const certificateSchema = new mongoose.Schema({
  certificateId: String,
});

const Certificate = mongoose.model('Certificate', certificateSchema);

app.use(bodyParser.json());

// POST endpoint to verify certificate ID
app.post('/verify', async (req, res) => {
  const { certificateId } = req.body;

  try {
    const certificate = await Certificate.findOne({ certificateId });

    if (certificate) {
      res.json({ message: 'Certificate ID is valid' });
    } else {
      res.json({ message: 'Certificate ID is invalid' });
    }
  } catch (error) {
    console.error('Error verifying certificate ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

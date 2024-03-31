const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;


mongoose.connect('mongodb://localhost:27017/certificates', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const CertificateSchema = new mongoose.Schema({
  certificateId: String,

});

const Certificate = mongoose.model('Certificate', CertificateSchema);


app.use(express.json());


app.get('/verify/:certificateId', async (req, res) => {
  const certificateId = req.params.certificateId;

  try {
 
    const certificate = await Certificate.findOne({ certificateId });
    
    if (certificate) {
    
      res.status(200).json({ success: true, certificate });
    } else {
     
      res.status(404).json({ success: false, message: 'Certificate not found' });
    }
  } catch (error) {
   
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

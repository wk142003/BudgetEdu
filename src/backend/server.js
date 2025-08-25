import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://woonkin23:LttYtSFCSEy5kJdD@cluster0.ys6digw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema and Model
const ResponseSchema = new mongoose.Schema({
  response: { type: String, required: true },
});
const Response = mongoose.model('Response', ResponseSchema);

// Routes
app.get('/api/other-responses', async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/other-responses', async (req, res) => {
  try {
    const { response } = req.body;
    if (!response) return res.status(400).json({ error: 'Response required' });
    const newResponse = new Response({ response });
    await newResponse.save();
    res.status(201).json(newResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
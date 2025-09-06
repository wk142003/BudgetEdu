// src/backend/server.js
/* eslint-env node */
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Schema and Model
const SubmissionSchema = new mongoose.Schema({
  selected: { type: String, required: true },
});
const Submission = mongoose.model('Submission', SubmissionSchema);

// Routes
app.get('/api/other-responses', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/other-responses', async (req, res) => {
  try {
    const { selected } = req.body;
    if (!selected) return res.status(400).json({ error: 'Selected required' });
    const newSubmission = new Submission({ selected });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
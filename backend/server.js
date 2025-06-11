const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://mongo:27017/twitter-clone');

const Tweet = mongoose.model('Tweet', {
  user: String,
  content: String,
  timestamp: Date,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/tweets', async (req, res) => {
  const tweets = await Tweet.find().sort({ timestamp: -1 });
  res.json(tweets);
});

app.post('/api/tweets', async (req, res) => {
  const tweet = new Tweet({ ...req.body, timestamp: new Date() });
  await tweet.save();
  res.status(201).json(tweet);
});

app.listen(5000, () => console.log('Backend running on port 5000'));

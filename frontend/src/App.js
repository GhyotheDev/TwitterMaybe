import React, { useState, useEffect } from 'react';
import TweetBox from './components/TweetBox';
import './App.css'; // 🟢 NEW LINE

function App() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const res = await fetch('http://localhost:5000/api/tweets');
    const data = await res.json();
    setTweets(data);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div>
      <h1>Twitter Clone</h1>
      <TweetBox onNewTweet={fetchTweets} />
      <div className="tweet-feed">
        {tweets.map((tweet) => (
          <div key={tweet._id} className="tweet">
            <strong>{tweet.user}</strong>: {tweet.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

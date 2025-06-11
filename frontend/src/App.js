import React, { useState, useEffect } from 'react';
import TweetBox from './components/TweetBox';

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
    <div style={{ padding: '20px' }}>
      <h1>Twitter Clone</h1>
      <TweetBox onNewTweet={fetchTweets} />
      {tweets.map((tweet) => (
        <div key={tweet._id} style={{ marginTop: '10px' }}>
          <strong>{tweet.user}</strong>: {tweet.content}
        </div>
      ))}
    </div>
  );
}

export default App;

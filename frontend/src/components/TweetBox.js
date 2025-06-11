import React, { useState } from 'react';

function TweetBox({ onNewTweet }) {
  const [user, setUser] = useState('');
  const [content, setContent] = useState('');

  const submit = async () => {
    await fetch('http://localhost:5000/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, content }),
    });
    setUser('');
    setContent('');
    onNewTweet();
  };

  return (
    <div className="tweet-box">
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={submit}>Tweet</button>
    </div>
  );
}

export default TweetBox;

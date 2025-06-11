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
    <div style={{ marginBottom: '20px' }}>
      <input
        placeholder="Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={submit}>Tweet</button>
    </div>
  );
}

export default TweetBox;

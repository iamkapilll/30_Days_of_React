// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [hoverMessage, setHoverMessage] = useState('');
  const [keyPressed, setKeyPressed] = useState('');

  // Click event
  const handleClick = () => {
    setCount(count + 1);
  };

  // Input change event
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Form submit event
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    setSubmittedName(name);
    setName('');
  };

  // Mouse over event
  const handleMouseOver = () => {
    setHoverMessage('You are hovering over me!');
  };

  // Key down event
  const handleKeyDown = (e) => {
    setKeyPressed(`You pressed: ${e.key}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>React Events Example</h2>

      {/* Click Event */}
      <button onClick={handleClick}>Click Me</button>
      <p>You clicked {count} times</p>

      {/* Change & Submit Event */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Submitted Name: {submittedName}</p>}

      {/* Mouse Over Event */}
      <div
        style={{
          background: '#f0f0f0',
          padding: '10px',
          marginTop: '20px',
          width: '200px',
          textAlign: 'center',
        }}
        onMouseOver={handleMouseOver}
      >
        Hover Over Me
      </div>
      <p>{hoverMessage}</p>

      {/* Key Down Event */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press any key..."
        style={{ marginTop: '20px' }}
      />
      <p>{keyPressed}</p>
    </div>
  );
}

export default App;

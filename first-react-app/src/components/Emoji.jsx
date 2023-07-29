import React, { useState } from 'react';

function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <div>
      <span role="img" aria-label={isHappy ? 'happy emoji' : 'sad emoji'}>
        {isHappy ? '😀' : '😢'}
      </span>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;

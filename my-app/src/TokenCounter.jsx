import React, { useState } from 'react';

function TokenCounter() {
  // Step 1: Setting up the state
  const [tokenCount, setTokenCount] = useState(0);

  // Function to handle the button click
  const handleButtonClick = () => {
    setTokenCount(tokenCount + 1);
  };

  return (
    <div>
      {/* Step 2: Creating the Button */}
      <button onClick={handleButtonClick}>Earn a Token</button>

      {/* Step 3: Displaying the Message and Count */}
      {tokenCount > 0 && <p>Congrats, you have earned a token! :)</p>}
      <p>Token Count: {tokenCount}</p>
    </div>
  );
}

export default TokenCounter;
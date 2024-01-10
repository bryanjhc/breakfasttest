import React, { useState } from 'react';

const TokenCounter: React.FC = () => {
  const [tokenCount, setTokenCount] = useState<number>(0);

  const handleButtonClick = () => {
    setTokenCount(tokenCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Earn a Token</button>
      {tokenCount > 0 && <p>Congrats, you have earned a token! :)</p>}
      <p>Token Count: {tokenCount}</p>
    </div>
  );
}

export default TokenCounter;
import React from 'react';

interface TokenCounterProps {
  tokenCount: number;
  setTokenCount: React.Dispatch<React.SetStateAction<number>>;
}

const TokenCounter: React.FC<TokenCounterProps> = ({ tokenCount, setTokenCount }) => {

  const handleButtonClick = () => {
    setTokenCount(prevCount => prevCount + 1); // Function to update based on previous state
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
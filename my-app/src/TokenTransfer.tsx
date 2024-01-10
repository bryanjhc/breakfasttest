import React, { useState } from 'react';

// Define props structure with TypeScript
interface TokenTransferProps {
  tokenCount: number;
  resetTokenCount: () => void;
}

const TokenTransfer: React.FC<TokenTransferProps> = ({ tokenCount, resetTokenCount }) => {
  const [walletAddress, setWalletAddress] = useState<string>('');

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleTransfer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (walletAddress) {
      console.log(`Transferring ${tokenCount} tokens to wallet: ${walletAddress}`);
      // Add your transfer logic here
      resetTokenCount(); // Reset the token counter to 0
    } else {
      alert("Please enter a wallet address.");
    }
  };

  return (
    <form onSubmit={handleTransfer}>
      <input
        type="text"
        value={walletAddress}
        onChange={handleAddressChange}
        placeholder="Enter wallet address"
        required
      />
      <button type="submit">Transfer Tokens to Wallet</button>
    </form>
  );
};

export default TokenTransfer;
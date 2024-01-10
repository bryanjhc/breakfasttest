import { useEffect, useState } from "react";
import { IPortkeyProvider, MethodsBase } from "@portkey/provider-types";
import "./App.css";
import detectProvider from "@portkey/detect-provider";
import SmartContract from "./SmartContract";
import TokenCounter from "./TokenCounter"; // Import TokenCounter component
import TokenTransfer from "./TokenTransfer"; // Import TokenTransfer component

function App() {
  const [provider, setProvider] = useState<IPortkeyProvider | null>(null);
  const [tokenCount, setTokenCount] = useState<number>(0); // Add tokenCount state

  // Function to reset the token count
  const resetTokenCount = () => setTokenCount(0);

  const init = async () => {
    try {
      setProvider(await detectProvider());
    } catch (error) {
      console.log(error, "=====error");
    }
  };

  const connect = async () => {
    await provider?.request({
      method: MethodsBase.REQUEST_ACCOUNTS,
    });
  };

  useEffect(() => {
    if (!provider) init();
  }, [provider]);

  if (!provider) return <>Provider not found.</>;

  return (
    <>
      <button onClick={connect}>Connect</button>
      <SmartContract provider={provider} />
      <TokenCounter tokenCount={tokenCount} setTokenCount={setTokenCount} /> {/* Pass setTokenCount as prop to TokenCounter */}
      <TokenTransfer tokenCount={tokenCount} resetTokenCount={resetTokenCount} /> {/* Include TokenTransfer component */}
    </>
  );
}

export default App;
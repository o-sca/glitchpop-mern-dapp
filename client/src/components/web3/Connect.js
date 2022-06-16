import { useState, useEffect } from 'react';
import { web3Modal } from "./Web3Modal";

const connect = () => {
  const [provider, setProvider] = useState(null);
  const [status, setStatus] = useState("Not Connected");
  const [error, setError] = useState(null);

  useEffect(() => {
    
  })
};

export default connect;
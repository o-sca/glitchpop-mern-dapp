import { useState } from "react";
import { connect, disconnect } from "../web3";

const ConnectButton = () => {
  const [button, setButton] = useState("CONNECT");

  const connectEventHandler = async () => {
    if (button === "DISCONNECT") {
      await disconnect();
      setButton("CONNECT");
    } else {
      await connect();
      setButton("DISCONNECT");
    }
  };

  return (
    <div className="connect-container">
      <button
        className="connect-btn"
        onClick={() => connectEventHandler()}
      >
        {button}
      </button>
    </div>
  );
};

export default ConnectButton;
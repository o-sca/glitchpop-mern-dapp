import { useState } from "react";
import { connect, disconnect } from "../web3";

const ConnectButton = () => {
  const [button, setButton] = useState("CONNECT");

  const handleButtonState = async (e) => {
    if (button === "CONNECT") {
      let res = await connect();
      if (res) {
        setButton("DISCONNECT");
      } else {
        await disconnect();
        setButton("CONNECT");
      }
    } else {
      await disconnect();
      setButton("CONNECT");
    }
  };

  return (
    <button className="connect-btn" onClick={handleButtonState}>
      {button}
    </button>
  );
};

export default ConnectButton;

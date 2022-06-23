import { useState } from "react";
import { mintEvent } from "../web3";

const MintButton = () => {
  const [status, setStatus] = useState("MINT NOW");

  function mintEventHandler(e) {
    e.preventDefault();
    setStatus("PENDING...");
    mintEvent()
      .then((res) => {
        if (res === false) return setStatus("ERROR");
        else return setStatus("SUCCESS");
      })
      .catch((e) => {
        return setStatus("ERROR");
      });
  }

  return (
    <button onClick={mintEventHandler} className="mint-btn">
      <span id="mint-status">{status}</span>
    </button>
  );
};

export default MintButton;

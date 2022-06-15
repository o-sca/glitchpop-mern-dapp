import { useState } from "react";
import { mintEvent } from "../web3";

export const MintNowButton = () => {
  const [status, setStatus] = useState("MINT NOW");

  function mintEventHandler(e) {
    e.preventDefault();
    setStatus("PENDING...");
    mintEvent()
      .then(res => {
        if (res === false) return setStatus("ERROR");
        else return setStatus("SUCCESS");
      })
      .catch(e => {
        return setStatus("ERROR");
      })
  };

  return (
    <div className="mint-btn">
      <button onClick={mintEventHandler}>
        <span id="mint-status">
          { status }
        </span>
      </button>
    </div>
  );
};

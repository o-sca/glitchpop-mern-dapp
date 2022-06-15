import plus from "../../assets/buttons/plus.svg";
import minus from "../../assets/buttons/minus.svg";

import { increase, decrease } from "../buttons";
import { mintEvent } from "../web3";
import { useState } from "react";

export const Mint = () => {
  const [hover, setHover] = useState(null);

  function handleMouseIn() {
    setHover(true);
	};

  function handleMouseOut() {
    setHover(false);
  };

  return (
    <div className="mint-container">
      <div className="mint-btn">
        <button
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          onClick={mintEvent}
        >
          <span id="mint-status">MINT NOW</span>
        </button>
      </div>
      <div className="mint-edit-items">
        <button id="decrease" onClick={decrease}>
          <img src={minus} alt="decrease" />
        </button>
        <div className="num-mints">
          <select name="mint-select" id="mint-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button id="increase" onClick={increase}>
          <img src={plus} alt="increase" />
        </button>
      </div>
    </div>
  );
};

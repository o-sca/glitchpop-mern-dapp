import plus from "../../assets/buttons/plus.svg";
import minus from "../../assets/buttons/minus.svg";
import { MintNowButton } from "./MintNowButton";
import { increase, decrease } from "../buttons";

export const Mint = () => {
  return (
    <div className="mint-container">
      <MintNowButton />
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

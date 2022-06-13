import twitter from "../../assets/buttons/twitter-button.svg";
import discord from "../../assets/buttons/Discord Button.svg";
import opensea from "../../assets/buttons/OpenSea.svg";

import {
  twitterEvent,
  discordEvent,
  openseaEvent,
} from "../buttons/Socials.handler";
import { connect, disconnect } from "../web3/Wallet.handler";

const Socials = () => {
  const connectStyle = {
    display: "block"
  };

  const disconnectStyle = {
    display: "none"
  };

  return (
    <div className="socials">
      <button>
        <img src={opensea} alt="opensea" id="opensea" onClick={openseaEvent} />
      </button>
      <button>
        <img src={twitter} alt="twitter" id="twitter" onClick={twitterEvent} />
      </button>
      <button>
        <img src={discord} alt="discord" id="discord" onClick={discordEvent} />
      </button>
      <div className="connect-container">
        <button className="connect-btn">
          <div id="disconnect" onClick={disconnect} style={disconnectStyle}>
            <span>DISCONNECT</span>
          </div>
          <div id="connect" onClick={connect} style={connectStyle}>
            <span>CONNECT</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Socials;
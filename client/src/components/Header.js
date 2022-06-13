import avatar from "../assets/images/avatar.svg";
import logo from "../assets/images/logo.svg";
import twitter from "../assets/buttons/twitter-button.svg";
import discord from "../assets/buttons/Discord Button.svg";
import opensea from "../assets/buttons/OpenSea.svg";
import plus from "../assets/buttons/plus.svg";
import minus from "../assets/buttons/minus.svg";
import "../assets/styles/header.css";

import { useState } from "react";
import { increase, decrease } from "./web3/Select.handler";
import { twitterEvent, discordEvent, openseaEvent } from "./buttons/Socials.handler";
import { connect, disconnect, mintEvent } from "./web3/Wallet.handler";

const Header = () => {
  const [hover, setHover] = useState(null);

  const connectStyle = {
    display: "block"
  };

  const disconnectStyle = {
    display: "none"
  };

  function handleMouseIn() {
    setHover(true);
	};

  function handleMouseOut() {
    setHover(false);
  };

  return (
    <header>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="container">
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
            <button className="connect-btn" > 
              <div 
                id="disconnect" 
                onClick={disconnect} 
                style={disconnectStyle}>
              <span>DISCONNECT</span>
              </div>
              <div 
                id="connect" 
                onClick={connect} 
                style={connectStyle}>
                <span>CONNECT</span>
              </div>
            </button>
          </div>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="mint-container">
          <div className="mint-btn">
            <button 
              onMouseOver={handleMouseIn} 
              onMouseOut={handleMouseOut} 
              onClick={mintEvent}>
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
      </div>
    </header>
  );
};

export default Header;
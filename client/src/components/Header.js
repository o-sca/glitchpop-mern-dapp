import avatar from "../assets/images/avatar.svg";
import logo from "../assets/images/logo.svg";
import twitter from "../assets/buttons/twitter-button.svg";
import discord from "../assets/buttons/Discord Button.svg";
import mint from "../assets/buttons/Mint-Now-Button.svg";
import mintHover from "../assets/buttons/Mint-Now-Hover.svg";
import opensea from "../assets/buttons/OpenSea.svg";
import plus from "../assets/buttons/plus.svg";
import minus from "../assets/buttons/minus.svg";
import "../assets/styles/header.css";

import { useState, useEffect } from "react";
import { twitterEvent, discordEvent, openseaEvent } from "./Socials.handler";
import { 
  mintEvent, 
  increase, 
  decrease, 
  connectEvent, 
  checkWalletisConnected } from "./Mint.handler";

const Header = () => {
  const [hover, setHover] = useState([]);
  
  function handleMouseIn() {
    setHover(true);
	};

  function handleMouseOut() {
    setHover(false);
  };

  useEffect(() => {
    return () => checkWalletisConnected();
  })

  return (
    <header>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="container">
        <div className="socials">
          <button><img src={opensea} alt="opensea" id="opensea" onClick={openseaEvent} /></button>
          <button><img src={twitter} alt="twitter" id="twitter" onClick={twitterEvent} /></button>
          <button><img src={discord} alt="discord" id="discord" onClick={discordEvent} /></button>
          <div className="connect-container">
            <button className="connect-btn" onClick={connectEvent}><div id="connect-status">CONNECT</div></button>
          </div>
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="mint-container">
        <button onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={mintEvent}>
          { hover ? <img src={mintHover} alt="mint"/> : <img src={mint} alt="mint"/> }
        </button>
        <button id="decrease" onClick={decrease}><img src={minus} alt="decrease" /></button>
        <div className="num-mints">
          <select name="mint-select" id="mint-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button id="increase" onClick={increase}><img src={plus} alt="increase" /></button>
      </div>
    </header>
  );
};

export default Header;
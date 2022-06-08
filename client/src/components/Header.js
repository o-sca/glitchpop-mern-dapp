import avatar from "../assets/images/avatar.svg";
import logo from "../assets/images/logo.svg";
import twitter from "../assets/buttons/twitter-button.svg";
import discord from "../assets/buttons/Discord Button.svg";
import mint from "../assets/buttons/Mint-Now-Button.svg";
import mintHover from "../assets/buttons/Mint-Now-Hover.svg";
import "../assets/styles/header.css";

import { useState } from "react";
import { twitterEvent, discordEvent } from "./Socials.handler";

const Header = () => {
  const [hover, setHover] = useState([]);
  
  function handleMouseIn() {
    setHover(true);
	};

  function handleMouseOut() {
    setHover(false);
  };

  function handleMintBtn(e) {
    e.preventDefault();
    window.location.href="/mint";
  }

  return (
    <header>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="container">
        <div className="socials">
          <img src={twitter} alt="twitter" id="twitter" onClick={twitterEvent} />
          <img src={discord} alt="discord" id="discord" onClick={discordEvent} />
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <button className="mint" onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} onClick={handleMintBtn}>
        { hover ? <img src={mintHover} alt="mint"/> : <img src={mint} alt="mint"/> }
      </button>
    </header>
  );
};

export default Header;
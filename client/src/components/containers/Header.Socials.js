import twitter from "../../assets/buttons/twitter-button.svg";
import discord from "../../assets/buttons/Discord Button.svg";
import opensea from "../../assets/buttons/OpenSea.svg";
import Connect from "./Header.Connect";
import {
  twitterEvent,
  discordEvent,
  openseaEvent,
} from "../buttons/Socials.handler";

const Socials = () => {
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
      <Connect />
    </div>
  );
};

export default Socials;
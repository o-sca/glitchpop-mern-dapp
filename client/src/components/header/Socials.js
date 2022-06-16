import twitter from "../../assets/buttons/twitter-button.svg";
import discord from "../../assets/buttons/Discord Button.svg";
import opensea from "../../assets/buttons/OpenSea.svg";
import ConnectButton from "./ConnectButton";
import {
  twitterEvent,
  discordEvent,
  openseaEvent,
} from "../buttons";

export const Socials = () => {
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
      <ConnectButton />
    </div>
  );
};
import twitter from "../../assets/buttons/twitter-button.svg";
import discord from "../../assets/buttons/Discord Button.svg";
import opensea from "../../assets/buttons/OpenSea.svg";
import { twitterEvent, discordEvent, openseaEvent } from "../buttons";

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
    </div>
  );
};

export default Socials;

import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";
import twitter from "../../assets/images/twitter-button.svg";
import discord from "../../assets/images/Discord Button.svg";
import mint from "../../assets/images/Mint-Now-Button.svg";

const Header = () => {
  return (
    <header>
      <div className="socials">
        <img src={twitter} alt="twitter" />
        <img src={discord} alt="discord" />
      </div>
      <img src={avatar} alt="avatar" className="avatar" />
      <img src={logo} alt="logo" className="logo" />
      <button className="mint">
        <img src={mint} alt="mint" />
      </button>
    </header>
  );
};

export default Header;
import MintButton from "./MintButton";
import MintEdit from "./MintEdit";
import ConnectButton from "./ConnectButton";
import Socials from "./Socials";
import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";
import "../../assets/styles/header.css";

const Header = () => {
  return (
    <header>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="container">
        <div className="socials">
          <Socials />
          <ConnectButton />
        </div>
        <img src={logo} alt="logo" className="logo" />
        <div className="mint-container">
          <MintButton />
          <MintEdit />
        </div>
      </div>
    </header>
  );
};

export default Header;

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
      <ConnectButton />
      <img src={logo} alt="logo" className="logo" />
      <MintButton />
      <MintEdit />
      
        <img src={avatar} alt="avatar" className="avatar" />
        <Socials />
      
    </header>
  );
};

export default Header;

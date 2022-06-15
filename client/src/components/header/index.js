import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";
import { Mint } from "./Mint";
import { Socials } from "./Socials";
import "../../assets/styles/header.css";

const Header = () => {
  return (
    <header>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="container">
        <Socials />
        <img src={logo} alt="logo" className="logo" />
        <Mint />
      </div>
    </header>
  );
};

export default Header;
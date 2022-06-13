import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";
import { Mint } from "./Hero.Mint";
import { Socials } from "./Hero.Socials";
import "../../assets/styles/hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="container">
        <Socials />
        <img src={logo} alt="logo" className="logo" />
        <Mint />
      </div>
    </div>
  );
};

export default Hero;
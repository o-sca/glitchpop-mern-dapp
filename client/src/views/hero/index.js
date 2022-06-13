import avatar from "../../assets/images/avatar.svg";
import logo from "../../assets/images/logo.svg";
import Socials from "../../components/containers/Hero.Socials";
import Mint from "../../components/containers/Hero.Mint";
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
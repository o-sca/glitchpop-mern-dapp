import aboutUsImg from "../../assets/images/genesis-art.svg";
import "../../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="left">
        <div className="about-us-header">
          <div>ABOUT</div>
          <div>GLITCHPOP</div>
        </div>
        <p>
          Project GLITCHPOP is our 2200 GENESIS hand drawn and generative art
          project. It is based on girls who have stumbled upon the dream world
          of the Ethereum metaverse. We are a new and upcoming project/team that
          is looking to provide an ecosystem of unique art. Our 2200 Genesis
          collection will be a key piece in access to future collections that we
          want to provide and will follow along with the journey and challenges
          that these girls face in the mysterious dream world.
        </p>
      </div>
      <div className="right">
        <img src={aboutUsImg} alt="genesis-art" />
      </div>
    </div>
  );
};

export default AboutUs;

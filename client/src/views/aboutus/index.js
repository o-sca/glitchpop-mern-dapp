import aboutUsImg from "../../assets/images/genesis-art.svg";
import aboutUsHeader from "../../assets/headers/About-Header.svg";
import "../../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="left">
        <object
          type="image/svg+xml"
          aria-label="header"
          data={aboutUsHeader}
          alt="about-header"
        />
        <p>
          Project GLITCHPOP is our 1500 GENESIS hand drawn and generative art
          project. It is based on girls who have stumbled upon the dream world
          of the Ethereum metaverse. We are a new and upcoming project/team that
          is looking to provide an ecosystem of unique art. Our 1500 Genesis
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

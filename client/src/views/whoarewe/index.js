import chuchudrewAvatar from "../../assets/images/chuchudrew.svg";
import { whoAreWeData } from "./whoarewe.content";
import { chuTwitter } from "../../components/buttons/Socials.handler";
import "../../assets/styles/whoarewe.css";

const WhoAreWe = () => {
  function createInfoItem(avatar, name, position, bio) {
    return (
      <div className="founders-info-container" key={name}>
        <img src={avatar} alt={name} />
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <div className="bio">{bio}</div>
      </div>
    );
  }

  return (
    <div className="who-are-we" id="who-are-we">
      <div className="who-are-we-header">WHO ARE WE</div>
      <div className="chuchudrew-container">
        <img src={chuchudrewAvatar} alt="chuchudrew" />
        <div className="chuchu-info">
          <h2 onClick={chuTwitter}>@CHUCHUDREW</h2>
          <p>
            We want our talent and beloved artist to be the centre spotlight of
            this project. Iris has been drawing for many years and this is her
            first NFT project. In her free time she likes to crochet, create fun
            drawings, create stickers, and all sorts of arts and crafts. We hope
            to highlight her art and hope that you all will support her.
          </p>
          <div className="chu-socials"></div>
        </div>
      </div>
      <div className="other-founders-container">
        {whoAreWeData.map(({ avatar, name, position, bio }) => {
          return createInfoItem(avatar, name, position, bio);
        })}
      </div>
    </div>
  );
};

export default WhoAreWe;

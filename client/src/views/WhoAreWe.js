import whoAreWeHeader from "../assets/headers/Who-Are-We-Header.svg";
import chuchudrewAvatar from "../assets/images/chuchudrew.svg";
import calvinAvatar from "../assets/images/calvin.svg";
import joieAvatar from "../assets/images/joie.svg";
import oscarAvatar from "../assets/images/oscar.svg";
import trudyAvatar from "../assets/images/trudy.svg";

const WhoAreWe = () => {
  return (
    <div className="who-are-we">
      <img src={whoAreWeHeader} alt="who-are-we-header" />
      <div className="chuchudrew-container">
        <img src={chuchudrewAvatar} alt="chuchudrew" />
        <div className="chuchu-info">
          <h2>@CHUCHUDREW</h2>
          <p>
            We want our talent and beloved artist to be the centre spotlight of this project. 
            Iris has been drawing for many years and this is her first NFT project. 
            In her free time she likes to crochet, create fun drawings, create stickers, 
            and all sorts of arts and crafts. We hope to highlight her art and 
            hope that you all will support her.
          </p>
        </div>
      </div>
      <div className="other-founders-container">
        <div className="founders-info-container">
          <img src={calvinAvatar} alt="avatar1" />
          <div className="name">Name</div>
          <div className="position">Position</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className="founders-info-container">
          <img src={joieAvatar} alt="avatar2" />
          <div className="name">Name</div>
          <div className="position">Position</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className="founders-info-container">
          <img src={oscarAvatar} alt="avatar3" />
          <div className="name">Name</div>
          <div className="position">Position</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className="founders-info-container">
          <img src={trudyAvatar} alt="avatar4" />
          <div className="name">Name</div>
          <div className="position">Position</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    </div>
  );
}
 
export default WhoAreWe;
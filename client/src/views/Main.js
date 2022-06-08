import aboutUsImg from "../assets/images/genesis-art.svg";
import aboutUsHeader from "../assets/headers/About-Header.svg";
import "../assets/styles/main.css";

const Main = () => {
  return (
    <main>
      <div className="about-us">
        <div className="left">
          <img src={aboutUsHeader} alt="about-us-header" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="right">
          <img src={aboutUsImg} alt="genesis-art" />
        </div>
      </div>
    </main>
  );
}
 
export default Main;
import twitter from "../../assets/images/twitter-button.svg";
import discord from "../../assets/images/Discord Button.svg";
import logo from "../../assets/images/footer-logo.svg";
import "../../assets/styles/footer.css";

const Footer = () => {
	return ( 
		<footer>
			<img src={logo} alt="footer-logo" className="footer-logo"/>
			<div className="links">
					<ul>
						<button>About</button>
					</ul>
			</div>
			<p className="cr">Copyright 2022© Glitchpop All Rights Reserved</p>
			<div className="footer-socials">
					<img src={twitter} alt="twitter" />
          <img src={discord} alt="discord" />
			</div>
		</footer>
	);
}
 
export default Footer;
import twitter from "../assets/buttons/twitter-button.svg";
import discord from "../assets/buttons/Discord Button.svg";
import logo from "../assets/images/footer-logo.svg";
import "../assets/styles/footer.css";

import { twitterEvent, discordEvent } from "./buttons/Socials.handler";

const Footer = () => {
	return ( 
		<footer>
			<img src={logo} alt="footer-logo" className="footer-logo"/>
			<div className="footer-socials">
					<img src={twitter} alt="twitter" onClick={twitterEvent} />
          <img src={discord} alt="discord" onClick={discordEvent} />
			</div>
			<div className="links">
					<ul>
						<li><a href="#about-us">About Us</a></li>
						<li><a href="#roadmap">Roadmap</a></li>
						<li><a href="#who-are-we">Who Are We</a></li>
						<li><a href="#faq-container">FAQs</a></li>
					</ul>
			</div>
			<p className="cr">Copyright 2022 © Glitchpop All Rights Reserved</p>
		</footer>
	);
}
 
export default Footer;
import faqHeader from "../assets/headers/FAQ-Header.svg";
import { discordEvent } from "../components/Socials.handler";

const FAQ = () => {
  return (
    <div className="faq-container">
      <img src={faqHeader} alt="faq-header" />
      <hr />
      <div className="faq-question-container">
        <p>How can I buy a GLITCHPOP NFT?</p>
        <button id="q1">+</button>
      </div>
      <hr />
      <div className="faq-question-container">
        <p>What is the total supply?</p>
        <button id="q2">+</button>
      </div>
      <hr />
      <div className="faq-question-container">
        <p>How much will it cost to mint a GLITCHPOP NFT?</p>
        <button id="q3">+</button>
      </div>
      <hr />
      <div className="faq-question-container">
        <p>Will there be a pre-sale?</p>
        <button id="q4">+</button>
      </div>
      <hr />
      <div className="more-q">
        <p>Still have questions?</p>
        <p><span onClick={discordEvent}>Join our discord</span> to learn more and ask questions! It's a glitchin' party over there!</p>
      </div>
    </div>
  );
}
 
export default FAQ;
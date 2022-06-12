import faqHeader from "../../assets/headers/FAQ-Header.svg";
import { faqData } from "./faq.content";
import { discordEvent } from "../../components/buttons/Socials.handler";
import Accordion from "../../components/Accordion";

const FAQ = () => {
  return (
    <div className="faq-container" id="faq-container">
      <img src={faqHeader} alt="faq-header" />
      <hr />
      {faqData.map(({ title, content }) => {
        return <Accordion title={title} content={content} key={title}/>
      })}
      <div className="more-q">
        <p>Still have questions?</p>
        <p><span onClick={discordEvent}>Join our discord</span> to learn more and ask questions! It's a glitchin' party over there!</p>
      </div>
    </div>
  );
}

export default FAQ;
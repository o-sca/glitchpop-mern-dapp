import { faqData } from "./faq.content";
import { discordEvent } from "../../components/buttons/Socials.handler";
import Accordion from "../../components/Accordion";
import "../../assets/styles/faq.css";

const FAQ = () => {
  return (
    <div className="faq-container" id="faq-container">
      <div className="faq-header">FREQUENTLY ASKED QUESTIONS</div>
      <hr />
      {faqData.map(({ title, content }) => {
        return <Accordion title={title} content={content} key={title} />;
      })}
      <div className="more-q">
        <p>Still have questions?</p>
        <p>
          <span onClick={discordEvent}>Join our discord</span> to learn more and
          ask questions! It's a glitchin' party over there!
        </p>
      </div>
    </div>
  );
};

export default FAQ;

import "./FAQ.css";
import Accordion from "./Accordion";
import faqDatabase from "./database/faqDatabase.json"

function FAQ() {

  return (
    <div className="accordion">
      {faqDatabase.data.map(( el ) => (
        <Accordion title={el.title} content={el.content} />
      ))}
    </div>
  );
}

export default FAQ;

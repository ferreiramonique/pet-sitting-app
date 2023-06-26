import "./FAQ.css";
import Accordion from "./Accordion";
import faqDatabase from "./database/faqDatabase.json"

function FAQ() {

  return (
    <div className="accordion">
      {faqDatabase.data.map(( el ) => (
        <Accordion title={el.title} content={el.content} />
      ))}
      <Accordion title={"I am a developer. Where is the source code for this website?"}
      content={
        <a className="link" href="https://github.com/mgrinstein/pet-sitting-app" target="_blank">View Source Code</a>
      } />
    </div>
  );
}

export default FAQ;

import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function FAQ() {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          I am a pet owner. Is this safe for my pet?
        </Accordion.Header>
        <Accordion.Body>
          Our portal only has verified pet sitters, and we make sure to support
          you thorughout as to guarantee a safe and fun experience for your pet.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          I am a pet sitter. How do I choose a stay?
        </Accordion.Header>
        <Accordion.Body>
          Navigate to our database section and read the pet profiles for
          upcoming sits. Choose a sit that suits you best and we will confirm
          once your request has been approved.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FAQ;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ChoiceButton.css";

function ChoiceButton(props) {
  const [request, setRequest] = useState(0);
  function choose() {
    return setRequest(1);
  }
  return (
    <>
      <Button
        className="choiceButton"
        disabled={request}
        onClick={choose}
        style={{ backgroundColor: request ? "gray" : "#1c6758" }}
      >
        {request ? "Requested" : `Choose ` + props.cardTitle}
      </Button>
    </>
  );
}

export default ChoiceButton;

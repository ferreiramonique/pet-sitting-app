import Card from "react-bootstrap/Card";
import "./PetSitElement.css";
import ChoiceButton from "./ChoiceButton";

function PetSitElement(props) {
  return (
    <>
      <Card className="card" style={{ width: "25rem" }}>
        <Card.Img
          className="cardImage"
          variant="top"
          src={require("./database/" + props.cardImage)}
          height="180px"
        />
        <Card.Body>
          <Card.Title className="cardTitle">{props.cardTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            &#128205; Location: {props.cardSubtitle}
          </Card.Subtitle>
          <Card.Text>{props.cardText}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            &#128197; Sitting dates: {props.cardStartDate} - {props.cardEndDate}
          </small>
        </Card.Footer>
        <ChoiceButton cardTitle={props.cardTitle} />
      </Card>
      <br></br>
    </>
  );
}

export default PetSitElement;

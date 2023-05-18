import ListGroup from "react-bootstrap/ListGroup";
import PetSitElement from "./PetSitElement";
import "./PetSitList.css";
import petDatabase from "./database/petDatabase.json";

function createElements(database) {
  return (
    <div>
      {database.map((el) => (
        <PetSitElement
          cardTitle={el.cardTitle}
          cardSubtitle={el.cardSubtitle}
          cardText={el.cardText}
          cardImage={el.cardImage}
          cardStartDate={el.cardStartDate}
          cardEndDate={el.cardEndDate}
        />
      ))}
    </div>
  );
}

function PetSitList() {
  return (
    <ListGroup className="List">
      <ListGroup.Item>{createElements(petDatabase.data)}</ListGroup.Item>
    </ListGroup>
  );
}

export default PetSitList;

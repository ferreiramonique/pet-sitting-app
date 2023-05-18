import ListGroup from "react-bootstrap/ListGroup";
import PetSitElement from "./PetSitElement";
import sittersDatabase from "./database/sittersDatabase.json";

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

function SittersList() {
  return (
    <ListGroup className="List">
      <ListGroup.Item>{createElements(sittersDatabase.data)}</ListGroup.Item>
    </ListGroup>
  );
}

export default SittersList;

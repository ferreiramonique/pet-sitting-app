import "./Help.css";
import PetNavbar from "../PetNavbar";
import SittersList from "../SittersList";
import "./Sitters.css";

function Sitters() {
  return (
    <div className="Help">
      <PetNavbar />
      <>
        <h1 className="title"> Available Sitters </h1>
        <SittersList />
      </>
    </div>
  );
}

export default Sitters;

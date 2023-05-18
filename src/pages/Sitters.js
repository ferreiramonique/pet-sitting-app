import "./Help.css";
import PetNavbar from "../PetNavbar";
import SittersList from "../SittersList";

function Sitters() {
  return (
    <div className="Help">
      <PetNavbar />
      <>
        <h1> Available Sitters </h1>
        <SittersList />
      </>
    </div>
  );
}

export default Sitters;

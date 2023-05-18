import "./Database.css";
import PetNavbar from "../PetNavbar";
import PetSitList from "../PetSitList";

function Database() {
  return (
    <div className="Database">
      <PetNavbar />
      <h1 className="title"> Pet Database </h1>
      <h2 className="body"> Spend some time with one of our lovely pets below: </h2>
      <PetSitList /> 
    </div>
  );
}

export default Database;

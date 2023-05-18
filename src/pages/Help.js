import "./Help.css";
import PetNavbar from "../PetNavbar";
import FAQ from "../FAQ";

function Help() {
  return (
    <div className="Help">
      <PetNavbar />
      <>
        <h1> Help Center </h1>
        <FAQ />
      </>
    </div>
  );
}

export default Help;

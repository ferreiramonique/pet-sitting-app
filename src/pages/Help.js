import "./Help.css";
import PetNavbar from "../PetNavbar";
import FAQ from "../FAQ";

function Help() {
  return (
    <>
      <PetNavbar />
      <h1 className="title"> Help Center </h1>
      <FAQ />
    </>
  );
}

export default Help;

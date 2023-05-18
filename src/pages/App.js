import "./App.css";
import PetNavbar from "../PetNavbar";
import SignupButton from "../SignupButton";
import CatPhoto from "../catPhoto.jpg";
import PetImage from "../PetImage";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PetNavbar />
      <header className="App-header">
        <h1>CFG Pet Sitting</h1>
        <h3>Have a pet that needs care whilst you're away?</h3>
        <h3>
          Have a love for animals and want to be a sitter for an adorable pet?
          We got a solution for you!
        </h3>
        <PetImage />
        {/* <img src={dogPhoto} className="Dog-photo" alt="dogPhoto" /> */}
        <img className="catimage" src={CatPhoto} alt="cat" />
        <br></br>

        <Link to="/database">
          <SignupButton
            signupButtonText="&#128054; Sign up to pet-sit &#128049;"
            link="https://google.co.uk"
          />{" "}
        </Link>

        <br></br>

        <Link to="/database">
          <SignupButton
            signupButtonText="&#128008; Log in &#128021;"
            link="https://google.co.uk"
          />{" "}
        </Link>
        <br></br>
      </header>
    </div>
  );
}

export default App;

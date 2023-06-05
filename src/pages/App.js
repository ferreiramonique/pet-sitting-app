import "./App.css";
import PetNavbar from "../PetNavbar";
import SignupButton from "../SignupButton";
import CatPhoto from "../catPhoto.jpg";
import PetImage from "../PetImage";
import { Link } from "react-router-dom";
import dogPhoto from "../dogPhoto.jpeg";

const text = [
  "We help match pet parents' needs to caring pet sitters for a win-win experience!",
  "Join us!",
];

function App() {
  return (
    <div className="App">
      <PetNavbar />
      <header className="App-header">
        <h1>CFG Pet Sitting</h1>
        <h3 className="catchy-text">Have a pet that needs care whilst you're away?<br></br>
          Have a love for animals and want to be a sitter for an adorable pet?<br></br><br></br>
          We have a solution for you!
        </h3>
        <PetImage
          className="dogimage"
          alt="dog"
          photo={dogPhoto}
          text={text[0]}
        />
        <PetImage
          className="catimage"
          alt="cat"
          photo={CatPhoto}
          text={text[1]}
        />
        <br></br>

        <Link to="/database">
          <SignupButton signupButtonText="&#128054; Sign up to pet-sit &#128049;" />{" "}
        </Link>

        <br></br>

        <Link to="/database">
          <SignupButton signupButtonText="&#128008; Log in &#128021;" />{" "}
        </Link>
        <br></br>
      </header>
    </div>
  );
}

export default App;

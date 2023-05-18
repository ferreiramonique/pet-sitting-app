import "./PetImage.css";
import dogPhoto from "./dogPhoto.jpeg";

function PetImage() {
  return (
    <article className="article">
      <img className="image" src={dogPhoto} alt="dog" />
      <h1 className="header">
        We help match pet parents' needs to caring <br></br> pet sitters for a
        win-win experience!
      </h1>
    </article>
  );
}

export default PetImage;

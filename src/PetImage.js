import "./PetImage.css";

function PetImage(props) {
  return (
    <article className="article">
      <img className="image" src={props.photo} alt="" />
      <h1 className="header">{props.text}</h1>
    </article>
  );
}

export default PetImage;

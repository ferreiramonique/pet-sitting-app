import "./SignupButton.css";

function signupButton({ signupButtonText, link }) {
  return (
    <a href={link}>
      <button className="signupButton">{signupButtonText}</button>
    </a>
  );
}

export default signupButton;

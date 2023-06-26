import PetNavbar from "../PetNavbar";
import "./About.css";
import Card from "react-bootstrap/Card";
import github from "../database/github.jpeg";

function About() {
    return (
        <div className="About">
            <PetNavbar />
            <h1 className="title">About this website</h1>
            <h3 className="description">
                Capstone project for the JavaScript / React course by Code First Girls.<br></br>
            </h3>
            <div className="cards">

                <Card className="card" style={{ width: "450" }}>
                    <h2>Website Wireframe</h2>
                    <iframe className="wireframe" width="700" height="432" src="https://miro.com/app/live-embed/uXjVMOdkvqU=/?autoplay=true" allowFullScreen></iframe>
                </Card>

                <br></br>
                <Card className="card" style={{ width: "25rem" }}>
                <h2>Source Code</h2>

                    <Card.Img
                        className="cardImage"
                        variant="top"
                        src={github}
                        height="180px"
                    />
                    <Card.Body>
                        <Card.Text>A pet-sitting website using React. <br></br>Created using create-react-app.
                            <h6 className="authors"><u>Authors</u> <br></br>Collie, Natasha <br></br>Grinstein, Monique<br></br>Oprea, Adriana
                            </h6>
                        </Card.Text>
                    </Card.Body>
                    <a className="btn" href="https://github.com/mgrinstein/pet-sitting-app" target="_blank">View Source Code</a>
                    <br></br>
                </Card>

            </div>
        </div>
    )
}

export default About;
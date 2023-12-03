import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logoPrintWiz.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {

  const contactLink = "https://api.whatsapp.com/send/?phone=%2B917721906862&text&type=phone_number&app_absent=0";

  return (
    <>
      <div className="nav">
        
        <Navbar className="headerContainer">
          <Link to="#home" className="brandContainer">
            <img src={logo} className="brandLogo"></img>
          </Link>
          {/* <FaBars /> */}
        
          <Button href={contactLink} className="getStartedButton" >
                  Contact Us
            </Button>
          
          {/* <div className="dummy1"></div>
          <div className="dummy2"></div>
          <div className="opts">
            <div className="headerIcons">
              <Container>
                <a href="www.google.com" className="getStartedButton">
                  Contact Us
                </a>
              </Container>
            </div>
          </div> */}
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;

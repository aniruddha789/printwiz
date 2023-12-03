import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from "../../assets/logoPrintWiz.png";
import cartLogo from "../../assets/shopping-bag (1).png";
import wishlistLogo from "../../assets/wishlist.png";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const signin = () => {
    return "Hello";
  };

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

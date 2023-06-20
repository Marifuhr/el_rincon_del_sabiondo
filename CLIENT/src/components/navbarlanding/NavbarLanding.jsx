// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo_landing from "../../assets/image/logo/logo6.png";
import "./navbarlanding.css";
import Deco_Text from "../Deco_Text/Deco_Text";

function NavbarLanding() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo_landing}
              className="d-inline-block align-top"
            />{" "}
            <Deco_Text />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarLanding;

import { Fragment } from "react";
import {Container, Nav, NavDropdown} from 'react-bootstrap'
import './Components.css'
import logo from './../images/light-logo.png'
export default function Navbar(){
    
    

    return(
        <Fragment>
        <header>
        {/* <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img className="logo img-fluid" src={logo} responsive/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar> */}



            {/* <nav>
                <div >
                    <img className="logo img-fluid" src={logo} responsive/>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav> */}
            <div className="hello">
                <div>
                    <h2 className="intro">Hey, I'm Mikhaella!</h2>
                    <h3 className="name">[MIK] + [KAY] + [LUH]</h3>
                    <hr></hr>
                    <p className="lead">
                        Full Stack Web Developer | Electrical Engineering Technologist
                    </p>
                    <a className="landing-btn" href="">Work with me!</a>
                </div>
            </div>

         </header>
        
        </Fragment>
    )
}

<div
      id="top"
      class="mb-2 d-flex align-items-center justify-content-center text-center mx-auto"
    >
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-dark d-flex align-items-center"
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-center align-items-center"
          id="navbarToggle"
        >
          <ul class="navbar-nav">
            <li
              class="nav-item d-flex justify-content-around align-items-center"
            >
              <a class="nav-link active" href="#intro"
                >Home<span class="sr-only">(current)</span></a
              >
            </li>
            <li
              class="nav-item d-flex justify-content-around align-items-center"
            >
              <a class="nav-link" href="#about">About</a>
            </li>
          </ul>
          <a class="navbar-brand d-none d-lg-block" href="#">
            <img
              style="width: 100px; height: 75px"
              src="images/2.png"
              class="d-flex align-items-center img-fluid"
            />
          </a>
          <ul class="navbar-nav">
            <li
              class="nav-item d-flex justify-content-around align-items-center"
            >
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li
              class="nav-item d-flex justify-content-around align-items-center"
            >
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
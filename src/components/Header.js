import React, {Component} from "react";
import { Navbar, Nav, Container/* Row, Col */ } from 'react-bootstrap';
import logo  from '../assets/images/logo-nl.png';
import '../assets/css/Header.css';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
const menuItems = [
    {
      title: 'Inicio',
      url: '/'
    },
    {
        title: 'Sobre Mi',
        url: '/about'
    },
    {
        title: 'Proyectos',
        url: '/projects'
    }
  ]
class Header extends Component{
    render(){
        return(
            <>
            <Container>
                <Navbar collapseOnSelect expand='lg'>  
                    <div className="btnBar">
                    <NavbarToggle aria-controls='responsive-navbar-nav' className="bg-white"/>
                    </div>
                <Navbar.Brand className="menu-brand" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top"alt="Logotipo"/>
                <span className="nameLuza"><strong className="nameLogo">Nicolás</strong>Luza</span>
                </Navbar.Brand>
                <NavbarCollapse className="menubar">
                <Nav>
                    {menuItems.map((item, index) => {
                        return(
                            <Nav.Link key={index} href={item.url}>{item.title}</Nav.Link>
                        )
                    })}
                </Nav>
                </NavbarCollapse>
                </Navbar>
            </Container>
            </>
        );
    }
}

export default Header;
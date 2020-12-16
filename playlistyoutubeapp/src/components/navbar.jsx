import React, { Component } from 'react';
import AuthenticationService from '../services/authentication-service';
import { Nav, Navbar } from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class NavbarLogout extends Component {
  render() {
    return <div></div>;
  }
}

class NavbarLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: sessionStorage.getItem('nom'),
      prenom: sessionStorage.getItem('prenom'),
    };
  }

  logout() {
    sessionStorage.clear();
    AuthenticationService.logout();
  }

  render() {
    return (
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text style={{ color: 'white' }}>
          {this.state.nom} {this.state.prenom}{' '}
        </Navbar.Text>
        <Navbar.Text onClick={this.logout}>
          <a href="/login">
            <FontAwesomeIcon className="bckg-icon" icon={faSignOutAlt} />{' '}
            Déconnexion
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    );
  }
}

const NavbarNav = () => {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="/">Accueil</Nav.Link>
      <Nav.Link href="/profile">Compte</Nav.Link>
    </Nav>
  );
};

const NavbarYoutube = ({ isConnected }) => {
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">YouTube Like</Navbar.Brand>
        {!isConnected ? <p></p> : <NavbarNav />}
        {!isConnected ? <NavbarLogout /> : <NavbarLogin />}
      </Navbar>
    </nav>
  );
};
export default NavbarYoutube;

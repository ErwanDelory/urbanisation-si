import React, { Component } from 'react';
import AuthenticationService from '../services/authentication-service';
import { Badge, Nav, Navbar } from 'react-bootstrap/';

// Modifier la gestion du compte Admin afin de mieux gérer la sécurité
// Passer par des props dans les fonctions ?

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
          <Badge variant="info">{sessionStorage.getItem('role')}</Badge> |&nbsp;
        </Navbar.Text>
        <Navbar.Text onClick={this.logout}>
          <a href="/login">Déconnexion</a>
        </Navbar.Text>
      </Navbar.Collapse>
    );
  }
}

const NavbarNav = () => {
  const reset = () => {
    sessionStorage.removeItem('id');
  };

  return (
    <Nav className="mr-auto">
      <Nav.Link href="/" onClick={reset}>
        Accueil
      </Nav.Link>
      <Nav.Link href="/profile" onClick={reset}>
        Mes playlists
      </Nav.Link>
      {sessionStorage.getItem('role') === 'admin' && (
        <Nav.Link href="/administrator" onClick={reset}>
          Administrateur
        </Nav.Link>
      )}
    </Nav>
  );
};

const NavbarYoutube = ({ isConnected }) => {
  const reset = () => {
    sessionStorage.removeItem('id');
  };

  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" onClick={reset}>
          YouTube Like
        </Navbar.Brand>
        {!isConnected ? <p></p> : <NavbarNav />}
        {!isConnected ? <NavbarLogout /> : <NavbarLogin />}
      </Navbar>
    </nav>
  );
};
export default NavbarYoutube;

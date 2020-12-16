import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import img from './../img/img1.jpg';

const Profile = () => {
  return (
    <div>
      <Container>
        <br />
        <h4>Listes de mes playlists</h4>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Nom de la playlist</Card.Title>
            <Card.Text>Description de la playlist</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Nom de la playlist</Card.Title>
            <Card.Text>Description de la playlist</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Button variant="warning">Ajouter une nouvelle playlist</Button>
      </Container>
    </div>
  );
};
export default Profile;

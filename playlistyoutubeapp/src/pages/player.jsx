import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Player = () => {
  return (
    <Container>
      <br />
      <Card>
        <Card.Body>
          <ReactPlayer className="player" url={sessionStorage.getItem('id')} />
          <Card.Title>{sessionStorage.getItem('titre')}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {sessionStorage.getItem('artiste')}
          </Card.Subtitle>
          <Card.Text>{sessionStorage.getItem('description')}</Card.Text>
          <Card.Link>
            <Button variant="success">J'aime</Button>{' '}
            <Button variant="danger">Je n'aime pas</Button>{' '}
            <Button variant="warning">Ajouter à la playlist</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Player;

import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Player = () => {
  return (
    <Container>
      <br />
      <iframe
        title="video"
        width="720"
        height="480"
        src="https://www.youtube.com/embed/9sWEecNUW-o?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <br />
      <Button variant="success">J'aime</Button>{' '}
      <Button variant="danger">Je n'aime pas</Button>{' '}
      <Button variant="warning">Ajouter à la playlist</Button>
    </Container>
  );
};
export default Player;

import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Container>
        <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Rechercher une vidéo !</Form.Label>
            <Form.Control type="text" placeholder="Saisir le nom de la vidéo" />
          </Form.Group>

          <Button variant="success" type="submit">
            Rechercher
          </Button>
        </Form>
        <br />
        <iframe
          title="video"
          width="288"
          height="192"
          src="https://www.youtube.com/embed/9sWEecNUW-o?autoplay=1"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        ></iframe>{' '}
        <iframe
          title="video"
          width="288"
          height="192"
          src="https://www.youtube.com/embed/9sWEecNUW-o?autoplay=1"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        ></iframe>
        <br />
        <h4>Top 5 des playlists les plus populaires !</h4>
      </Container>
    </div>
  );
};
export default Home;

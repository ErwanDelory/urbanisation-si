import React, { useState } from 'react';
import { Button, Card, Container, Form, Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Player = () => {
  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState('');

  const handleInputChoiceChange = (event) => {
    const { value } = event.target;
    setChoice(value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    fetch(
      `http://localhost:5001/api/playlist/creator/${sessionStorage.getItem(
        'userid'
      )}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((mes) => {
        console.log(mes.playlist);
      });
    setShow(true);
  };
  // Finir l'ajout dans la playlist
  //const addVideo = () => {};

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
            <Button variant="warning" onClick={handleShow}>
              Ajouter à la playlist
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Ajouter la vidéo dans une playlist</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="genre">
                  <Form.Label>Choix de la playlist</Form.Label>
                  <Form.Control
                    as="select"
                    name="choice"
                    value={choice}
                    onChange={handleInputChoiceChange}
                  >
                    <option>Playlist 1</option>
                    <option>Playlist 2</option>
                    <option>Playlist 3</option>
                  </Form.Control>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Annuler
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Ajouter
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Player;

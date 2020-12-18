import React, { useState } from 'react';
import { Button, Card, Container, Form, Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Player = () => {
  const [show, setShow] = useState(false);
  const [choice, setChoice] = useState([]);
  const [value, setValue] = useState('');

  const handleInputValueChange = (event) => {
    const { value } = event.target;
    setValue(value);
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
        return setChoice(mes.playlist);
      });
    setShow(true);
  };

  const addVideo = () => {
    let id = '';
    for (let i = 0; i < choice.length; i++) {
      if (value === choice[i].name) {
        id = choice[i].id;
      }
    }
    fetch(`http://localhost:5001/api/playlist/add/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: sessionStorage.getItem('id') }),
    }).then((res) => {
      res.json();
      setShow(false);
    });
  };

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
                <Form.Group controlId="value">
                  <Form.Label>Choix de la playlist</Form.Label>
                  <Form.Control
                    as="select"
                    name="value"
                    value={value}
                    onChange={handleInputValueChange}
                  >
                    <option>Veuillez choisir la playlist !</option>
                    {choice.map((data) => (
                      <option>{data.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Annuler
                </Button>
                <Button variant="primary" onClick={addVideo}>
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

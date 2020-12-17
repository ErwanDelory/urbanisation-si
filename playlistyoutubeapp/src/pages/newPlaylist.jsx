import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NewPlaylist = () => {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleInputTitreChange = (event) => {
    const { value } = event.target;
    setTitre(value);
  };

  const handleInputDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5001/api/playlist/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: titre,
        description: description,
        info: {
          creator: sessionStorage.getItem('userid'),
        },
      }),
    }).then((res) => {
      res.json();
      history.push('/profile');
    });
  };

  return (
    <Container>
      <br />
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="titre">
          <Form.Label>Titre de la playlist</Form.Label>
          <Form.Control
            type="text"
            name="titre"
            placeholder="Saisir le titre de la playlist"
            autoFocus
            value={titre}
            onChange={handleInputTitreChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description de la playlist</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Saisir la description de la playlist"
            value={description}
            onChange={handleInputDescriptionChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Créer
        </Button>
      </Form>
    </Container>
  );
};
export default NewPlaylist;

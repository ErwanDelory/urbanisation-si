import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Alert, Button, Container, Form } from 'react-bootstrap';

const Register = () => {
  const [genre, setGenre] = useState('Male');
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [pays, setPays] = useState('');
  const [job, setJob] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [stateError, setStateError] = useState(false);
  const [stateSuccess, setStateSucces] = useState(false);
  const history = useHistory();

  const handleInputEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleInputPasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleInputLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
  };

  const handleInputFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const handleInputGenreChange = (event) => {
    const { value } = event.target;
    setGenre(value);
  };

  const handleInputAgeChange = (event) => {
    const { value } = event.target;
    setAge(value);
  };

  const handleInputPaysChange = (event) => {
    const { value } = event.target;
    setPays(value);
  };

  const handleInputJobChange = (event) => {
    const { value } = event.target;
    setJob(value);
  };

  const redirect = () => {
    history.push('/login');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        genre: genre,
        nom: lastname,
        prenom: firstname,
        email: email,
        age: age,
        pays: pays,
        job: job,
        password: password,
      }),
    }).then((res) => {
      if (!email || !password || !lastname || !firstname) {
        setMessage('Information incorrecte.');
        setStateError(true);
        setStateSucces(false);
        return;
      }
      res.json();
      setMessage('Inscription réussie !');
      setStateSucces(true);
      setStateError(false);
      setTimeout(redirect, 3000);
    });
  };

  return (
    <div className="Login">
      <br />
      <Container>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="genre">
            <Form.Label>Sexe</Form.Label>
            <Form.Control
              as="select"
              name="genre"
              value={genre}
              onChange={handleInputGenreChange}
            >
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Mail</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Saisir votre adresse mail"
              autoFocus
              value={email}
              onChange={handleInputEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Saisir votre mot de passe"
              value={password}
              onChange={handleInputPasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Saisir votre nom"
              value={lastname}
              onChange={handleInputLastNameChange}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="Saisir votre prénom"
              value={firstname}
              onChange={handleInputFirstNameChange}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Âge</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Saisir votre âge"
              value={age}
              onChange={handleInputAgeChange}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Pays</Form.Label>
            <Form.Control
              type="text"
              name="pays"
              placeholder="Saisir votre pays"
              value={pays}
              onChange={handleInputPaysChange}
            />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Job</Form.Label>
            <Form.Control
              type="text"
              name="job"
              placeholder="Saisir votre job"
              value={job}
              onChange={handleInputJobChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            S'inscire
          </Button>
        </Form>
        <br />
        {message && stateError ? (
          <Alert variant="danger">{message}</Alert>
        ) : (
          <p></p>
        )}
        {message && stateSuccess ? (
          <Alert variant="success">{message}</Alert>
        ) : (
          <p></p>
        )}
      </Container>
    </div>
  );
};
export default Register;

import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ReactPlayer from 'react-player';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const history = useHistory();

  const handleInputSearchChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyC4P1dArLxP3TUvS_W0P0QISO-QfT4SsZ8&maxResults=10&type=video`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        let x = [];
        for (let i = 0; i < res.items.length; i++) {
          x[i] = {
            id: `https://www.youtube.com/watch?v=${res.items[i].id.videoId}`,
            titre: res.items[i].snippet.title,
            artiste: res.items[i].snippet.channelTitle,
            description: res.items[i].snippet.description,
          };
        }

        setData(x);
        console.log(data);
      });
  };

  const openMedia = (data) => {
    sessionStorage.setItem('id', data.id);
    sessionStorage.setItem('titre', data.titre);
    sessionStorage.setItem('artiste', data.artiste);
    sessionStorage.setItem('description', data.description);
    history.push('/player');
  };

  return (
    <div>
      <Container>
        <br />
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="search">
            <Form.Label>Rechercher une vidéo !</Form.Label>
            <Form.Control
              type="text"
              name="search"
              placeholder="Saisir le nom de la vidéo"
              autoFocus
              value={search}
              onChange={handleInputSearchChange}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Rechercher
          </Button>
        </Form>
        <br />
        {data.map((data) => (
          <div>
            <Card>
              <Card.Body>
                <ReactPlayer className="player" url={data.id} />
                <Card.Title>{data.titre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.artiste}
                </Card.Subtitle>
                <Card.Text>{data.description}</Card.Text>
                <Card.Link onClick={() => openMedia(data)}>
                  Ouvrir dans l'onglet
                </Card.Link>
              </Card.Body>
            </Card>

            <br />
          </div>
        ))}
        <br />
        <h4>Top 5 des playlists les plus populaires !</h4>
      </Container>
    </div>
  );
};
export default Home;

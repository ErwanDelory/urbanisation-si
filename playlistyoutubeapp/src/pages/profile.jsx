import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import img from './../img/img1.jpg';

const Profile = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
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
        return setPlaylist(mes.playlist);
      });
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h4>Listes de mes playlists</h4>
        {playlist?.map((playlist) => (
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{playlist.name}</Card.Title>
              <Card.Text>{playlist.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        <br />
        <Button variant="warning" href="/newplaylist">
          Ajouter une nouvelle playlist
        </Button>
        <br />
      </Container>
    </div>
  );
};
export default Profile;

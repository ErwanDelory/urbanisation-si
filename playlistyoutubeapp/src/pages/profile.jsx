import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Card, Container } from 'react-bootstrap';
import img from './../img/img1.jpg';

const Profile = () => {
  const [playlist, setPlaylist] = useState([]);
  const history = useHistory();

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
        return setPlaylist(mes.playlist);
      });
  }, []);

  const openPlaylist = (idPlaylist) => {
    sessionStorage.setItem('idPlaylist', idPlaylist);
    history.push('/profile/playlist');
  };

  const deletePlaylist = (idPlaylist) => {
    fetch(`http://localhost:5001/api/playlist/delete/${idPlaylist}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      res.json();
      window.location.reload();
    });
  };

  return (
    <div>
      <Container>
        <br />
        <h4>Listes de mes playlists</h4>
        {playlist?.map((playlist) => (
          <div>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{playlist.name}</Card.Title>
                <Card.Text>{playlist.description}</Card.Text>
                <Button
                  variant="success"
                  onClick={() => openPlaylist(playlist.id)}
                >
                  Ouvrir
                </Button>{' '}
                <Button
                  variant="danger"
                  onClick={() => deletePlaylist(playlist.id)}
                >
                  Supprimer
                </Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        ))}
        <Button variant="warning" href="/newplaylist">
          Ajouter une nouvelle playlist
        </Button>
        <br />
      </Container>
    </div>
  );
};
export default Profile;

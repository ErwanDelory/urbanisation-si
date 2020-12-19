import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ReactPlayer from 'react-player';

const Playlist = () => {
  const [video, setVideo] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `http://localhost:5001/api/playlist/find/${sessionStorage.getItem(
        'idPlaylist'
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
        console.log(mes.playlist.urls);
        return setVideo(mes.playlist.urls);
      });
  }, []);

  const returnProfile = () => {
    sessionStorage.removeItem('idPlaylist');
    history.push('/profile');
  };

  return (
    <div>
      <Container>
        <br />
        <Button variant="success" onClick={returnProfile}>
          Retourner sur mon profil
        </Button>
        <br />
        {video.map((data) => (
          <div>
            <Card>
              <Card.Body>
                <ReactPlayer className="player" url={data} />
              </Card.Body>
            </Card>
            <br />
          </div>
        ))}
      </Container>
    </div>
  );
};
export default Playlist;

import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Playlist = () => {
  const history = useHistory();

  const returnProfile = () => {
    history.push('/profile');
  };

  return (
    <div>
      <Container>
        <br />
        <Button variant="success" onClick={returnProfile}>
          Retourner sur mon profil
        </Button>
      </Container>
    </div>
  );
};
export default Playlist;

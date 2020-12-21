import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { VictoryPie } from 'victory';

const Admin = () => {
  const [age, setAge] = useState('');
  const [country, setCountry] = useState([]);
  const [sex, setSex] = useState([]);
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stats/age', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((mes) => {
        console.log(mes.data[0]);
        return setAge(mes.data[0]);
      });

    fetch('http://localhost:5000/api/stats/pays', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((mes) => {
        console.log(mes.data);
        return setCountry(mes.data[0]);
      });

    fetch('http://localhost:5000/api/stats/sex', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((mes) => {
        console.log(mes.data);
        return setSex(mes.data[0]);
      });

    fetch('http://localhost:5000/api/stats/job', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((mes) => {
        console.log(mes.data);
        return setJob(mes.data[0]);
      });
  }, []);

  return (
    <Container>
      <br />
      <h4>Répartition des utilisateurs par âge</h4>
      <VictoryPie
        data={[
          { x: '-18', y: age.moins18 },
          { x: '18-24', y: age.entre1824 },
          { x: '25-34', y: age.entre2534 },
          { x: '35-44', y: age.entre3544 },
          { x: '45-54', y: age.entre4554 },
          { x: '55-64', y: age.entre5564 },
          { x: '65-74', y: age.entre6574 },
          { x: '+75', y: age.plus75 },
        ]}
        width={1000}
      />
    </Container>
  );
};
export default Admin;

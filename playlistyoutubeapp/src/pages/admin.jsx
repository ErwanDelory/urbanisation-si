import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryPie } from 'victory';

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
        return setCountry(mes.data);
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
        return setSex(mes.data);
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
        return setJob(mes.data);
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
        colorScale={'qualitative'}
        width={1000}
      />
      <h4>Répartition des utilisateurs par sexe</h4>
      <VictoryPie
        data={[
          { x: 'Homme', y: sex[0]?.nombre },
          { x: 'Femme', y: sex[1]?.nombre },
        ]}
        startAngle={90}
        endAngle={-90}
        colorScale={'qualitative'}
        width={1000}
      />

      <h4>Réparition des 5 métiers les plus présent sur la plateforme</h4>
      <VictoryChart domainPadding={70}>
        <VictoryBar
          style={{ data: { fill: '#c43a31' }, tickLabels: { angle: 90 } }}
          data={[
            { x: job[0]?.job, y: job[0]?.nombre },
            { x: job[1]?.job, y: job[1]?.nombre },
            { x: job[2]?.job, y: job[2]?.nombre },
            { x: job[3]?.job, y: job[3]?.nombre },
            { x: job[4]?.job, y: job[4]?.nombre },
          ]}
          width={1000}
          labelPlacement="vertical"
        />
      </VictoryChart>

      <h4>Réparition des 5 pays les plus présent sur la plateforme</h4>
      <VictoryChart domainPadding={70}>
        <VictoryBar
          style={{ data: { fill: '#c43a31' }, tickLabels: { angle: 90 } }}
          data={[
            { x: country[0]?.pays, y: country[0]?.nombre },
            { x: country[1]?.pays, y: country[1]?.nombre },
            { x: country[2]?.pays, y: country[2]?.nombre },
            { x: country[3]?.pays, y: country[3]?.nombre },
            { x: country[4]?.pays, y: country[4]?.nombre },
          ]}
          width={1000}
          labelPlacement="vertical"
        />
      </VictoryChart>
    </Container>
  );
};
export default Admin;

import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resData: '',
      token: sessionStorage.getItem('token'),
      name: '',
    };
  }

  componentDidMount() {
    /*fetch('http://localhost:5000/api/test', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[4]);
        this.setState({ name: data.data[4].nom });
      });*/
  }

  render() {
    return (
      <div>
        <p>Home page</p>
      </div>
    );
  }
}

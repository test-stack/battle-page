import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

export default class AddFormContainer extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = { newGame: {}};
    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.setGame = this.setGame.bind(this);
  }
  submit (event) {
    event.preventDefault();
    console.log(this.state.newGame);
    /*
    const newGame = Object.assign({}, { picture: $('#picture').attr('src') }, this.state.newGame);
    fetch('http://localhost:8080/games', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newGame)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      // We go back to the games list view
      hashHistory.push('/games');
    });
    */
  }
  // We make sure to keep the state up-to-date to the latest input values
  setGame (event) {
    let radiobutton;
    if ( document.getElementById('optionsRadios1').checked === true ) {
      radiobutton = 'option1';
    } else {
      radiobutton = 'option2';
    }
    const newGame = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      select: document.getElementById('select').value,
      radiobutton: radiobutton,
      checkbox: document.getElementById('checkbox').checked,
      textarea: document.getElementById('textarea').value
    };
    this.setState({ newGame });
  }
  render () {
    return <Form submit={this.submit} setGame={this.setGame} />
  }
}

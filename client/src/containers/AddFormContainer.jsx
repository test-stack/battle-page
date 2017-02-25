import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

export default class AddFormContainer extends Component {
  constructor (props) {
    super(props);
    // Initial state
    this.state = { newItem: {}};
    // Bind this (context) to the functions to be passed down to the children components
    this.submit = this.submit.bind(this);
    this.setGame = this.setGame.bind(this);
  }
  submit () {
    console.log(this.state.newItem);
    const newItem = this.state.newItem;
    fetch('http://localhost:8080/api/list', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(newItem)
    })
    .then(response => response.json())
    .then(data => {
      // We go back to the games list view
      hashHistory.push('/home');
    });
  }
  // We make sure to keep the state up-to-date to the latest input values
  setGame (event) {
    let radiobutton;
    if ( document.getElementById('optionsRadios1').checked === true ) {
      radiobutton = 'option1';
    } else {
      radiobutton = 'option2';
    }
    const newItem = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      select: document.getElementById('select').value,
      radiobutton: radiobutton,
      checkbox: document.getElementById('checkbox').checked,
      textarea: document.getElementById('textarea').value
    };
    this.setState({ newItem });
  }
  render () {
    return <Form submit={this.submit} setGame={this.setGame} />
  }
}

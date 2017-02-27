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
    this.setItem = this.setItem.bind(this);
  }
  submit (e) {
    e.preventDefault();
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
      console.log(data);
      hashHistory.push('/list');
    });
  }
  // We make sure to keep the state up-to-date to the latest input values
  setItem (event) {
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
    return <Form submit={this.submit} setItem={this.setItem} />
  }
}

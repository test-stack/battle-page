import React, { Component } from 'react';
import { ListItemManager } from '../components';

export default class ListContainer extends Component {
  constructor (props) {
    super(props);
    // The initial state
    this.state = { list: [] };
  }

  // Once the component mounted it fetches the data from the server
  componentDidMount () {
    this.getList();
  }

  getList () {
    fetch('http://localhost:8080/api/list', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json()) // The json response to object literal
    .then(data => this.setState({ list: data.elastic.responses[0].hits.hits }));
  }

  render () {
    const { list } = this.state;
    return (
      <div>
        <ListItemManager list={list} />
      </div>
    );
  }
}

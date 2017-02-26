import React, { Component } from 'react';
import { ListItemManager, Modal } from '../components';

export default class ListContainer extends Component {
  constructor (props) {
    super(props);
    // The initial state
    this.state = { list: [], selectedItem: {} };
    this.toggleModal = this.toggleModal.bind(this);
  }

  // Once the component mounted it fetches the data from the server
  componentDidMount () {
    this.getList();
  }

  toggleModal (index) {
    this.setState({ selectedItem: this.state.list[index]._source });
    $('#item-modal').modal();
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
    const { list, selectedItem } = this.state;
    return (
      <div>
        <Modal item={selectedItem} />
        <ListItemManager list={list} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

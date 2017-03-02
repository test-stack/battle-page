import React, { Component } from 'react';
import { TodosContainer, Modal } from '../components';

export default class TodoContainer extends Component {
  constructor (props) {
    super(props);
    this.state = { todos: [], selectedTodo: {} };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount () {
    this.getTodos();
  }

  toggleModal (index) {
    let _selectedTodo = Object.assign(
      { _id: this.state.todos[index]._id },
      this.state.todos[index]._source
    );
    this.setState({ selectedTodo: _selectedTodo });
    $('#item-modal').modal();
  }

  deleteTodo (_id) {
    fetch(`http://localhost:8080/api/todo/${_id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
      if (response.elastic.found === true)
        this.setState({ todos: this.state.todos.filter(todo => todo._id !== _id) });
    });
  }

  getTodos () {
    fetch('http://localhost:8080/api/todo', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then((data) => {
      if ( data.elastic.responses[0].hits !== undefined ) {
        this.setState({ todos: data.elastic.responses[0].hits.hits })
      }
    });
  }

  render () {
    const { todos, selectedTodo } = this.state;
    return (
      <div>
        <Modal todo={selectedTodo} />
        <TodosContainer
          todos={todos}
          toggleModal={this.toggleModal}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

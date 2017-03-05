import React, { Component } from 'react';
import { TodosContainer, TodoModal, TodoDeleteAllModal } from '../components';

export default class TodoContainer extends Component {
  constructor (props) {
    super(props);
    this.state = { todos: [], selectedTodo: {}, paginationSize: 10, totalTodos: 0, pagination: true };
    this.togglePagination = this.togglePagination.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.deleteAllTodos = this.deleteAllTodos.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setPaginationSize = this.setPaginationSize.bind(this);
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
    $('#todo-modal').modal();
  }

  toggleDeleteModal () {
    $('#todo-delete-modal').modal();
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
        this.setState({ totalTodos: (this.state.totalTodos - 1)})
    })
    .then(() => {
      this.updateSizePagination();
    });
  }

  deleteAllTodos () {
    $('#todo-delete-modal').modal('hide');
    fetch('http://localhost:8080/api/todo', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ totalTodos: 0 })
      this.setState({ todos: []});
      this.updateSizePagination();
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
        this.setState({ totalTodos: data.elastic.responses[0].hits.total })
      }
    })
    .then(() => {
      this.updateSizePagination();
    });
  }

  updateSizePagination () {
    if ( this.state.totalTodos < this.state.paginationSize ) {
      this.setState({ paginationSize: this.state.totalTodos })
    }
  }

  togglePagination (togglePagination) {
    this.setState({ pagination: togglePagination });
  }

  setPaginationSize () {
    let _paginationSize = document.getElementById('sizePagination').value;
    if ( _paginationSize > this.state.todos.length ) _paginationSize = this.state.todos.length;
    this.setState({ paginationSize: _paginationSize });
  }

  render () {
    const { todos, selectedTodo, paginationSize, pagination} = this.state;
    return (
      <div>
        <TodoDeleteAllModal deleteAllTodos={this.deleteAllTodos} />
        <TodoModal todo={selectedTodo} />
        <TodosContainer
          todos={todos}
          toggleModal={this.toggleModal}
          toggleDeleteModal={this.toggleDeleteModal}
          deleteTodo={this.deleteTodo}
          paginationSize={paginationSize}
          pagination={pagination}
          togglePagination={this.togglePagination}
          setPaginationSize={this.setPaginationSize}
        />
      </div>
    );
  }
}

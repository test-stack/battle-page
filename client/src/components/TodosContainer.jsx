import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Todo from './Todo';

export default class TodosContainer extends PureComponent {
  render () {
    const { todos, toggleModal, deleteTodo } = this.props;
    let countOfItems = 0;
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-8" id="pageLeftBlock">
            <div className="container scrollable" id="listNavBarCards">
              <div className="card" id="listNavBar">
                <div className="card-block">
                  <Link to="/todo-form" className="btn btn-success" id="listNavBarAddComponent">Přidat Todo</Link>
                </div>
              </div>
              <br/>
              <div className="row" id="todosList">
              {
                todos
                  .map((todo, i) => {
                    countOfItems = i;
                    return (
                      <Todo  {...todo}
                        key={todo._id}
                        i={i}
                        toggleModal={toggleModal}
                        deleteTodo={deleteTodo}
                      />
                    );
                  })
              }
              </div>
              <hr />
            </div>
          </div>
          <div className="col-md-4" id="pageRightBlock">
            <div className="card">
              <div className="card-block">
                <h2 className="card-title">Todo komponenta</h2>
                <p className="card-text"><strong><span id="countOfTodos">{todos.length}</span></strong>{' '}
                {todos.length == 1 && `záznam`}
                {(todos.length >= 2 && todos.length <= 4) && `záznamy`}
                {(todos.length >= 5 || todos.length == 0) && `záznamů`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Todo from './Todo';

export default class TodosContainer extends PureComponent {

  constructor() {
    super();
    this.state = { page: 1 }
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.setState({ page: 1 });
    return true;
  }

  render () {
    const { todos, toggleModal, deleteTodo, paginationSize, pagination} = this.props;
    let _pages = 0, _todoCounter = 0;
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
                    if ( !pagination || ( pagination && (i >= (this.state.page*paginationSize-paginationSize) && i < this.state.page*paginationSize))) {
                      return (
                        <Todo  {...todo}
                          key={todo._id}
                          i={i}
                          toggleModal={toggleModal}
                          deleteTodo={deleteTodo}
                        />
                      )
                    }
                  })
              }
              </div>
              { pagination &&
                <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Basic example">
                  <div className="btn-group mr-2" role="group" aria-label="First group">
                    {
                      todos.map((todo, i) => {
                        _todoCounter++;
                        if ( _todoCounter == paginationSize ) {
                          _todoCounter = 0;
                          _pages++;
                          return (
                            <button type="button" className={ `btn btn-${_pages == this.state.page ? 'primary' : 'secondary'}` } key={_pages} id={ `page-${_pages}` } onClick={this.setPage.bind(this, _pages)}>{_pages}</button>
                          )
                        }
                      })
                    }
                    { Math.ceil(todos.length / paginationSize) > _pages &&
                      <button type="button" className={ `btn btn-${Math.ceil(todos.length / paginationSize) == this.state.page ? 'primary' : 'secondary'}` } key={Math.ceil(todos.length / paginationSize)} id={ `page-${_pages}` } onClick={() => this.setPage(Math.ceil(todos.length / paginationSize))}>{Math.ceil(todos.length / paginationSize)}</button>
                    }
                  </div>
                </div>
              }
              <hr />
            </div>
          </div>
          <div className="col-md-4" id="pageRightBlock">
            <div className="card">
              <div className="card-block">
                <h2 className="card-title">Todo komponenta</h2>
                <p className="lead">Zobrazuji <strong><span id="paginationSize">{ pagination ? paginationSize : todos.length }</span></strong>{' '}
                {todos.length == 1 && `kartu`}
                {(todos.length >= 2 && todos.length <= 4) && `karty`}
                {(todos.length >= 5 || todos.length == 0) && `karet`}
                { pagination &&
                  <span>{', celkem '}</span>
                }
                { pagination &&
                  <span id="totalTodos">{todos.length}</span>
                }
                </p>
                <hr />
                <h3>Stránkování</h3>
                <p className="card-text">Zapnutím se aktivuje funkce stránkování</p>
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                  <button type="button" id="activatePagination" className={ `btn btn-${pagination ? 'success' : 'secondary'}` } onClick={() => this.props.togglePagination(true)}>Zapnout</button>
                  <button type="button" id="deactivatePagination" className={ `btn btn-${pagination ? 'secondary' : 'success'}` } onClick={() => this.props.togglePagination(false)}>Vypnout</button>
                </div>
                { pagination &&
                  <div className="form-group">
                    <br/>
                    <label htmlFor="inputPassword4">Počet karet na stránce:</label>
                    <input type="text" className="form-control form-control-sm" id="sizePagination" defaultValue={paginationSize} onChange={() => this.props.setPaginationSize()}/>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  setPage (_page) {
    this.setState({ page: _page });
  }
}

import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Todo extends PureComponent {
  render () {
    const { _id, i, _index, toggleModal, deleteTodo } = this.props;
    const { topic, tags, category, shareTodo, notification, description, timestamp} = this.props._source;
    return (
      <div className="col-sm-6" id={`todo${i}`}>
        <div className="card">
          <div className="card-block">
            <h3 className="card-title" id="todoTitle">{topic}</h3>
            <p className="card-text" id="todoText">{`${description.substring(0, 150)} ...`}</p>
            <div className="btn-group btn-group-sm" role="group" aria-label="...">
              <button className="btn btn-danger" role="button" id="todoRemoveButton" onClick={() => deleteTodo(_id)}>Smazat Todo</button>
              <button className="btn btn-secondary" role="button" id="todoShowModalButton" onClick={() => toggleModal(i)}>Zobrazit detail Todo</button>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

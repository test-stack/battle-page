import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Item extends PureComponent {
  render () {
    const { _id, i, _index, toggleModal, deleteItem } = this.props;
    const { checkbox, email, password, radiobutton, select, textarea, timestamp} = this.props._source;
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">{email}</h3>
            <p className="card-text">{`${textarea.substring(0, 150)}...`}</p>
            <div className="btn-group btn-group-sm" role="group" aria-label="...">
              <button className="btn btn-danger" role="button" onClick={() => deleteItem(_id)}>Smazat</button>
              <button className="btn btn-secondary" role="button" onClick={() => toggleModal(i)}>Zobrazit detail</button>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

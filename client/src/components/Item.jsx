import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Item extends PureComponent {
  render () {
    console.log(this.props._source);
    const { _id, _index } = this.props;
    const { checkbox, email, password, radiobutton, select, textarea, timestamp} = this.props._source;
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">{email}</h3>
            <p className="card-text">{`${textarea.substring(0, 150)}...`}</p>
            <div className="btn-group btn-group-sm" role="group" aria-label="...">
              <a href="#" className="btn btn-danger">Smazat</a>
              <a href="#" className="btn btn-secondary">Zobrazit detail</a>
            </div>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

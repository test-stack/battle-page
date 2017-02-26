import React, { PureComponent } from 'react';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="card">
        <div className="card-block">
          <h1 className="card-title">Welcome</h1>
          <h6 className="card-subtitle mb-2 text-muted">Uvodni stranka</h6>
        </div>
      </div>
    );
  }
}

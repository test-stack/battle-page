import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class About extends PureComponent {
  render () {
    return (
      <div className="card">
        <div className="card-block">
          <h1 className="card-title">Battle page</h1>
          <p className="card-text">Vyukova aplikace pro testery, ktera umoznuje testovovani funkcionalnich a nefunkcionalnich charakteristik.</p>
          <Link className="card-link" to="/games">Prochazet</Link>
        </div>
      </div>
    );
  }
}

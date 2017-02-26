import React, { PureComponent } from 'react';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="card" id="welcomeCard">
        <div className="card-block">
          <h1 className="card-title" id="welcomeCardTitle">Welcome</h1>
          <h6 className="card-subtitle mb-2 text-muted" id="welcomeCardSubtitle">Uvodni stranka</h6>
        </div>
      </div>
    );
  }
}

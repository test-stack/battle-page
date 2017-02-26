import React, { PureComponent } from 'react';

export default class Options extends PureComponent {
  render () {
    return (
      <div className="card" id="optionsCard">
        <div className="card-block">
          <h1 className="card-title" id="optionsCardTitle">Nastaveni aplikace</h1>
          <p className="card-text" id="optionsCardText">Nejaky text</p>
        </div>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';

export default class Options extends PureComponent {
  render () {
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-12" id="pageBlock">
            <div className="card" id="optionsCard">
              <div className="card-block">
                <h1 className="card-title" id="optionsCardTitle">Nastavení aplikace</h1>
                <p className="card-text" id="optionsCardText"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

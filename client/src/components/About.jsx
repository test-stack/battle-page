import React, { PureComponent } from 'react';

export default class About extends PureComponent {
  render () {
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-12" id="pageBlock">
            <div className="card">
              <div className="card-block">
                <h1 className="card-title">Battle page</h1>
                <p className="card-text">Výuková aplikace pro testery, která umožňuje testovování funkcionálních a nefunkcionálních charakteristik.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

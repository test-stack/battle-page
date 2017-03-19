import React, {PureComponent} from 'react';

export default class Welcome extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <div className="row top-buffer">
          <div className="col-md-12" id="pageBlock">
            <div className="card" id="welcomeCard">
              <div className="card-block">
                <h1 className="card-title" id="welcomeCardTitle">Úvodní stránka</h1>
                <h6 className="card-subtitle mb-2 text-muted" id="welcomeCardSubtitle"></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

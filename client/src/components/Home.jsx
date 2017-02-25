import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">Battle Page</Link>

          <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Komponenty
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/form" className="dropdown-item">Formular</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/options" className="nav-link">Nastaveni</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">O Aplikaci</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row top-buffer">
            <div className="col-md-8">{this.props.children}</div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-block">
                  <h2 className="card-title">Nastaveni komponenty</h2>
                  <p className="card-text">Vyberte komponentu ze seznamu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
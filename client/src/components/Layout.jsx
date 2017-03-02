import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Layout extends PureComponent {
  render () {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand" id="homePageButton">Battle Page</Link>

          <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="componentListButton">
                  Komponenty
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/todo" className="dropdown-item" id="componentListButton">Todo</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/options" className="nav-link" id="componentOptionButton">Nastavení</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" id="componentAboutButton">O Aplikaci</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div id="container">{this.props.children}</div>
      </div>
    );
  }
}

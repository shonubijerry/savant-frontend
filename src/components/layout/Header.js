import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const sidebar = document.querySelector('.sidenav');
    M.Sidenav.init(sidebar, {
      edge: 'left',
      inDuration: 250,
    });
  }

  render() {
    return (
      <header>
        <nav className="white" role="navigation">
          <div className="nav-wrapper container">
            <Link to="/" id="logo-container" className="brand-logo brown-text text-lighten-2">Savant</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/genres" className="brown-text text-lighten-2">Genres</Link></li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li><Link to="/genres">Genres</Link></li>
            </ul>
            <Link to="/" data-target="nav-mobile" className="sidenav-trigger brown-text text-lighten-2"><i className="material-icons">menu</i></Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

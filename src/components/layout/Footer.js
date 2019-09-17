import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="page-footer brown">
        <div className="footer-copyright">
          <div className="container">
            Copyright &copy; 2019
            <Link className="brown-text text-lighten-3" to="http://github.com/shonubijerry"> Korede Shonubi</Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

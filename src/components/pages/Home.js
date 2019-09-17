import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';
import background from '../../assets/image/background.jpg';
import '../../assets/css/app.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    M.Parallax.init(document.querySelector('.parallax'));
  }

  render() {
    return (
      <main>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <div className="row">
                <h2 className="header col s12 m6 push-m6 center brown-text text-lighten-2">More Knowledge</h2>
              </div>
              <div className="row">
                <h5 className="header col s12 m6 push-m6 brown-text text-lighten-2 center">Choose your area of interest and gets books related to your choice</h5>
              </div>
              <div className="row">
                <Link to="genres" id="download-button" className="col s4 m2 push-m8 push-s4 btn-large waves-effect waves-light brown lighten-1 hoverable">Get Started</Link>
              </div>
              <br />
              <br />

            </div>
          </div>
          <div className="parallax responsive-img"><img src={background} alt="Unsplashed background img 1" /></div>
        </div>


        <div className="container">
          <div className="section">
            <div className="row brown-text">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center"><i className="material-icons">check_circle</i></h2>
                  <h5 className="center">Interest</h5>

                  <p className="light center">Select your area of interest from our predefined list of our genres.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center"><i className="material-icons">library_books</i></h2>
                  <h5 className="center">Books</h5>

                  <p className="light center">Get list of books based on options you select from previous step.</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center"><i className="material-icons">chrome_reader_mode</i></h2>
                  <h5 className="center">Read</h5>

                  <p className="light center">Pick a book from the list and start reading.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    );
  }
}

export default Home;

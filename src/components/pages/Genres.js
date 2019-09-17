/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import '../../assets/css/app.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>

        <div className="container">
          <div className="section">
            <div className="row">
              <h5 className="center brown-text text-lighten-2">Select your favourite genres</h5>
              <form onSubmit="">
                <div className="row">
                  <div className="col s6 m3 brown-text text-lighten-2">
                    <p>
                      <label htmlFor="art">
                        <input type="checkbox" id="art" />
                        <span>Art</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Biography</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Business</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Children</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Christian</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Classic</span>
                      </label>
                    </p>
                  </div>

                  <div className="col s6 m3">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Comics</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Crime</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Fantacy</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Fiction</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Graphic Novels</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>History</span>
                      </label>
                    </p>
                  </div>
                  <div className="col s6 m3">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Horror</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Humor & Comedy</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Memoir</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Music</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Paranormal</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Philosophy</span>
                      </label>
                    </p>
                  </div>
                  <div className="col s6 m3">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Poetry</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Psycology</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Science</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Scienc Fiction</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Sports</span>
                      </label>
                    </p>
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Travel</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <button className="btn brown waves-effect waves-light center hoverable" type="submit" name="action">
Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>
    );
  }
}

export default Home;

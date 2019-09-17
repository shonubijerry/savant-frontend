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
        <div className="container ">
          <div className="section ">
            <div className="row brown-text text-lighten-2">
              <div className="row">
                <h5 className="center brown-text text-lighten-2">Here are books you can read</h5>
              </div>
              <div className="row">
                <div className="col s5 m2 ">
                  <a href="/#"><img alt="thumb" src="https://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" /></a>
                </div>
                <div className="col s7 m10">
                  <div className="header ">
                    <a href="/#"><h6>Harry Potter: A History of Magic</h6></a>
                  </div>
                  <div>By British Library</div>
                  <div className="truncate ">
                      The official companion book to the special exhibition Harry Potter: A History of Magic, featuring an extraordinary treasure trove of magical artifacts, original drafts and drawings by J.K. Rowling, and additional material exclusive to the US run of this
                      unforgettable exhibition!
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col s5 m2 ">
                  <a href="# "><img alt="thumb" src="http://books.google.com/books/content?id=0rOWtgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" /></a>
                </div>
                <div className="col s7 m10 ">
                  <div className="header ">
                    <h6>Harry Potter: A History of Magic</h6>
                  </div>
                  <div>By British Library</div>
                  <div className="truncate ">
                        The official companion book to the special exhibition Harry Potter: A History of Magic, featuring an extraordinary treasure trove of magical artifacts, original drafts and drawings by J.K. Rowling, and additional material exclusive to the US run of this
                        unforgettable exhibition!
                  </div>
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

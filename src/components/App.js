import React from 'react';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Genres from './pages/Genres';
import Books from './pages/Books';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/genres" component={Genres} />
      <Route exact path="/books" component={Books} />
      {/* <Route component={PageNotFound} /> */}
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;

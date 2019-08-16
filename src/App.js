import React, { Component } from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/blog" component={Blog} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

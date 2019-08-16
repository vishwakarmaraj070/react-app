import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {

  render() {

    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg unique-color navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">React App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">App</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
              </ul>
              <form className="form-inline">
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
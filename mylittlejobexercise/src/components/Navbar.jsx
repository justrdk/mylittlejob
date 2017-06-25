import React from 'react';

const Navbar = () => <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="navbar-brand"><i className="fa fa-rebel" aria-hidden="true"></i></div>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="dropdown active">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a>Album</a></li>
              <li><a>Artist</a></li>
              <li><a>Playlist</a></li>
              <li><a>Track</a></li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="counter">Counter</li>
        </ul>
      </div>
    </div>
  </div>
</nav>;

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/spotify/actions';

const setCounter = (results, filter) => {
  const pluralFilter = `${filter}s`;
  return results[pluralFilter] !== undefined ? results[pluralFilter].total : 0;
}

const Navbar = ({ setFilter, results, filter }) => <nav className="navbar navbar-default">
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
              <li onClick={() => setFilter('album')}><a>Album</a></li>
              <li onClick={() => setFilter('artist')}><a>Artist</a></li>
              <li onClick={() => setFilter('playlist')}><a>Playlist</a></li>
              <li onClick={() => setFilter('track')}><a>Track</a></li>
            </ul>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="counter">Counter: {setCounter(results, filter)}</li>
        </ul>
      </div>
    </div>
  </div>
</nav>;

Navbar.displayName = 'Navbar';

Navbar.propTypes = {
  setFilter: PropTypes.func.isRequired,
  results: PropTypes.object,
  filter: PropTypes.string
};

export const mapStateToProps = ({ spotify }) => ({
  filter: spotify.filter,
  results: spotify.results
});

export const mapDispatchToProps = dispatch => ({
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

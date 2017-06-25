import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchSpotify } from '../reducers/spotify/actions';

const Searchbar = ({ search, filter, loading, error }) => {
  let input;

  return (
    <div className="container">
      <form className="form-horizontal">
        <div className="form-group form-group-lg">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <input ref={node => { input = node }} disabled={loading}
              className="form-control" type="text" id="formGroupInputLarge" placeholder="Search..." />
            <a disabled={loading} className="search-icon" onClick={() => search(filter, input.value)}><i className="fa fa-search" aria-hidden="true"></i></a>
            <p className="error">Please fill out the form.</p>
            { error !== '' ? <p className="error">Error: {error}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

Searchbar.displayName = 'Search bar';

Searchbar.propTypes = {
  search: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  filter: PropTypes.string,
  error: PropTypes.string
};

export const mapStateToProps = ({ spotify }) => ({
  filter: spotify.filter,
  loading: spotify.loading,
  error: spotify.error
});

export const mapDispatchToProps = dispatch => ({
  search: (filter, searchInput) => {
    const searchObj = {
      q: searchInput,
      type: filter
    };
    dispatch(searchSpotify(searchObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);

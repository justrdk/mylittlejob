import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const IMAGE_WIDTH = 64;
const IMAGE_HEIGHT = 64;

const renderResults = (results, filter) => {
  const pluralFilter = `${filter}s`;

  if (results[pluralFilter]) {
    const { items } = results[pluralFilter];
    return items.map(({ images, name, album }, index) => {
      const thumbnail = filter === 'track'
      ? album.images.find(({ width, height }) => width === IMAGE_WIDTH && height === IMAGE_HEIGHT)
      : images.find(({ width, height }) => width === IMAGE_WIDTH && height === IMAGE_HEIGHT);
      return <li key={index}><img className="thumb" src={thumbnail ? thumbnail.url: "http://placekitten.com/64/64"} /> {name}</li>
    })
  }
};

const Songs = ({ results, filter }) => <div className="container">
  <div className="col-xs-12 col-sm-8 col-sm-offset-2">
    <h3> Filter By {filter} </h3>
    <ul className="results">
      {renderResults(results, filter)}
    </ul>
  </div>
</div>;

Songs.displayName = 'Songs';

Songs.propTypes = {
  results: PropTypes.object,
  filter: PropTypes.string
};

export const mapStateToProps = ({ spotify }) => ({
  results: spotify.results,
  filter: spotify.filter
});

export default connect(mapStateToProps)(Songs);

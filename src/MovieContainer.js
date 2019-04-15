import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Commands from './actions/films/commands';

function Movie(props) {
  const {
    movie, getMovie, match,
  } = props;
  const { params } = match;
  let imageWidth;
  // eslint-disable-next-line no-undef
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    imageWidth = 'w154';
  } else {
    imageWidth = 'w342';
  }

  const imageURL = `https://image.tmdb.org/t/p/${imageWidth}${movie.poster_path}`;
  //   const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  document.querySelector('body').style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
  document.querySelector('footer').style.position = 'absolute';
  document.querySelector('footer').style.bottom = '0px';
  
  useEffect(() => { getMovie(params.id); }, []);
  return (
    +params.id === movie.id && (
    <div>
      <div className="container-panel">
        <img src={`${imageURL}`} alt="poster" />
      </div>
    </div>
    )
  );
}

Movie.propTypes = {
  movie: PropType.object.isRequired,
  getMovie: PropType.func.isRequired,
  match: PropType.object.isRequired,
};

const mapState = (state) => {
  const { movie } = state;
  return { movie };
};

const mapDispatch = dispatch => ({
  getMovie: (movieId) => { dispatch(Commands.getFilmById(movieId)); },
});

export default connect(mapState, mapDispatch)(Movie);

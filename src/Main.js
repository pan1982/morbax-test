import PropType from 'prop-types';
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Movie from './MovieContainer';

function Main(props) {
  const { movies } = props;
  const imageURL = 'https://image.tmdb.org/t/p/w154';
  const elem = document.querySelector('body');
  elem.style.backgroundImage = 'url(https://itsshowtimenj.files.wordpress.com/2013/10/abstractdesktop-astounding-wood-background-wallpaper-backgrounds.jpg)';
  elem.style.backgroundAttachment = 'fixed';

  return (
    <div>
      {movies.results.map(movie => (
        <div className="container-panel" key={movie.id}>
          <Container>
            <Row>
              <Col sm={3}>
                <Link to={`/films/${movie.id}`}><img src={`${imageURL}${movie.poster_path}`} alt="poster" /></Link>
              </Col>
              <Col sm={9}>
                <Link to={`/films/${movie.id}`}><h4>{movie.title}</h4></Link>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
}

Main.propTypes = {
  movies: PropType.object.isRequired,
};

export default Main;

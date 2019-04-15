import PropType from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Button,
} from 'reactstrap';

function Main(props) {
  const { movies, getMovies, helper } = props;
  const imageURL = 'https://image.tmdb.org/t/p/w154';
  const elem = document.querySelector('body');

  elem.style.backgroundImage = 'url(https://itsshowtimenj.files.wordpress.com/2013/10/abstractdesktop-astounding-wood-background-wallpaper-backgrounds.jpg)';
  elem.style.backgroundAttachment = 'fixed';
  document.querySelector('footer').style.position = 'relative';
  document.querySelector('footer').style.bottom = '0px';
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
      <Container className="paggination">
        <Row>
          <Col sm={4} className="d-flex justify-content-center">
            <Button disabled={movies.page === 1} onClick={() => getMovies(helper.genre, helper.sortBy, movies.page - 1)}><i className="fas fa-arrow-left" /> {'PREVIOUS PAGE'} </Button>
          </Col>
          <Col sm={4} className="d-flex justify-content-center">
            CURRENT PAGE {movies.page} TOTAL PAGES {movies.total_pages}
          </Col>
          <Col sm={4} className="d-flex justify-content-center">
            <Button disabled={movies.page === movies.total_pages} onClick={() => getMovies(helper.genre, helper.sortBy, movies.page + 1)}> {'NEXT PAGE'} <i className="fas fa-arrow-right" /></Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

Main.propTypes = {
  movies: PropType.object.isRequired,
  getMovies: PropType.func.isRequired,
  helper: PropType.object.isRequired,
};

const mapProps = (state) => {
  const { helper } = state;
  return { helper };
};

export default connect(mapProps)(Main);

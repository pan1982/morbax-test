import PropType from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Container, Navbar, NavbarBrand, NavItem, Nav, NavLink, Form, FormGroup, Input, Label,
} from 'reactstrap';
import './App.css';
import { changeSortBy, changeGenre } from './reducers/helperReducer';
import Commands from './actions/films/commands';

function App(props) {
  const {
    changeSort, helper, updateGenre, genres, getGenres, getMovies,
  } = props;
  useEffect(() => {
    getGenres();
  }, []);
  const updateSortBy = (value) => {
    changeSort(value);
    getMovies(helper.genre, value);
  };

  const setGenre = (value) => {
    updateGenre(value);
    getMovies(value, helper.sortBy);
  };

  return (
    <Navbar color="dark">
      <NavbarBrand>The Movie DB</NavbarBrand>
      <Nav>
        <NavItem>
          <Form inline className="nav-filter">

            <FormGroup>
              <Label for="sort">Genre:</Label>
              <Input type="select" name="select" id="exampleSelect" onChange={e => setGenre(e.target.selectedOptions[0].id)}>
                {genres.map(genre => <option id={genre.id} key={genre.id}>{genre.name}</option>)}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="sort">Sort:</Label>
              <Input type="select" name="select" id="exampleSelect" value={helper.sortBy} onChange={e => updateSortBy(e.target.value)}>
                <option>popularity.asc</option>
                <option>popularity.desc</option>
                <option>release_date.asc</option>
                <option>release_date.desc</option>
                <option>revenue.asc</option>
                <option>revenue.desc</option>
                <option>primary_release_date.asc</option>
                <option>primary_release_date.desc</option>
                <option>original_title.asc</option>
                <option>original_title.desc</option>
                <option>vote_average.asc</option>
                <option>vote_average.desc</option>
                <option>vote_count.asc</option>
                <option>vote_count.desc</option>
              </Input>

            </FormGroup>
          </Form>
        </NavItem>
      </Nav>

    </Navbar>

  );
}

App.propTypes = {
  changeSort: PropType.func.isRequired,
  helper: PropType.object.isRequired,
  updateGenre: PropType.func.isRequired,
  genres: PropType.array.isRequired,
  getGenres: PropType.func.isRequired,
  getMovies: PropType.func.isRequired,
};

const mapState = (state) => {
  const { helper, genres } = state;
  return { helper, genres };
};

const mapDispatch = dispatch => ({
  changeSort: (sortBy) => { dispatch(changeSortBy(sortBy)); },
  updateGenre: (genre) => { dispatch(changeGenre(genre)); },
  getGenres: () => { dispatch(Commands.getGenres()); },
  getMovies: (genres, sortBy, page) => { dispatch(Commands.getFilms(genres, sortBy, page)); },
});

export default connect(mapState, mapDispatch)(App);

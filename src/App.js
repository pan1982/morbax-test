import PropType from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Container, Navbar, NavbarBrand, NavItem, Nav, NavLink, Form, FormGroup, Input,
} from 'reactstrap';
import './App.css';
import { changeSortBy } from './reducers/helperReducer';

function App(props) {
  const { changeSort, helper } = props;

  const updateSortBy = (value) => {
    changeSort(value);
  };

  return (
    <Navbar color="dark">
      <NavbarBrand>The Movie DB</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="#">Films</NavLink>
        </NavItem>
        <NavItem>
          <Form>
            <FormGroup>
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
};

const mapState = (state) => {
  const { helper } = state;
  return { helper };
};

const mapDispatch = dispatch => ({
  changeSort: (sortBy) => { dispatch(changeSortBy(sortBy)); },
});

export default connect(mapState, mapDispatch)(App);

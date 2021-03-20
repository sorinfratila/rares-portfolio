import React from 'react';
import PropTypes from 'prop-types';

function project(props) {
  return <h1>Project {props.page}</h1>;
}

project.propTypes = {
  page: PropTypes.string,
};

export default project;

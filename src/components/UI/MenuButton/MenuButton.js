import React from 'react';
import * as classes from './MenuButton.module.scss';
import PropTypes from 'prop-types';

function MenuButton(props) {
  const { clicked } = props;

  return (
    <button onClick={clicked} className={classes.MenuButton}>
      <div className={classes.Up}></div>
      <div className={classes.Down}></div>
    </button>
  );
}

MenuButton.propTypes = {
  clicked: PropTypes.func,
};

export default MenuButton;

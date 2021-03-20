import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './Headline.module.scss';

function headline({ children, size = 'normal' }) {
  const classesArr = [classes.Headline];
  switch (size) {
    case 'normal': {
      classesArr.push(classes.Normal);
      break;
    }
    case 'large': {
      classesArr.push(classes.Large);
      break;
    }
    case 'small': {
      classesArr.push(classes.Small);
      break;
    }
    default: {
      classesArr.push(classes.Normal);
      break;
    }
  }
  return <h1 className={classesArr.join(' ')}>{children}</h1>;
}

headline.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

export default headline;

import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './ProjectTile.module.scss';
import imgArr from '../../images/portfolio';
import { isMobile } from 'react-device-detect';
import Link from '../UI/Link/Link';
// import Img from 'gatsby-image';

function projectTile({ to = '/' }) {
  const classesArr = [classes.ProjectTile];
  if (isMobile) {
    classesArr.push('mobile');
  }

  return (
    <Link className={classesArr.join(' ')} to={to}>
      <span className={classes.opaque_overlay}></span>
      <img className={classes.img_bg} src={imgArr[0]}></img>
      <span className={classes.wording}>
        <span className={classes.btn_headline}>Title</span>
        <span className={classes.btn_byline}>Sub-title</span>
      </span>
      <img className={classes.img_vg} src={imgArr[1]}></img>
      <span className={classes.btn_overlay}></span>
    </Link>
  );
}

projectTile.propTypes = {
  to: PropTypes.string,
  data: PropTypes.any,
};

export default projectTile;

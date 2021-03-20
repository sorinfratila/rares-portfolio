import React from 'react';
import { Link } from 'gatsby';

import * as classes from './pagesCss/blog.module.scss';
// import Post from "../templates/Post/Post"

const blog = () => {
  return (
    <>
      <div className={classes.Content}></div>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export default blog;

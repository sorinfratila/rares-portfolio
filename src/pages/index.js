import React, { Component } from 'react';
import { Link } from 'gatsby';

class HomePage extends Component {
  render() {
    return (
      <>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/portfolio">go to portfolio</Link>
      </>
    );
  }
}

export default HomePage;

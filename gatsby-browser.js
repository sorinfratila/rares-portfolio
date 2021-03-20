/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import PropTypes from 'prop-types';
import { LayoutProvider } from './src/context/LayoutContext';
import { SubLayoutProvider } from './src/context/SubLayoutContext';

export const wrapRootElement = ({ element }) => (
  <LayoutProvider>
    <SubLayoutProvider>{element}</SubLayoutProvider>
  </LayoutProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};

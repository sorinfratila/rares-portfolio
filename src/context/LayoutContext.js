import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultContextValue = {
  mainMenuOpen: false,
  headerMenuOpen: false,
  toggleMainMenu: () => {},
  toggleHeaderMenu: () => {},
};

export const LayoutContext = React.createContext(defaultContextValue);

export const LayoutProvider = props => {
  const [mainMenuOpen, toggleMainMenu] = useState(false);
  const [headerMenuOpen, toggleHeaderMenu] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        mainMenuOpen,
        headerMenuOpen,
        toggleMainMenu: res => toggleMainMenu(res),
        toggleHeaderMenu: () => toggleHeaderMenu(!headerMenuOpen),
      }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node,
};

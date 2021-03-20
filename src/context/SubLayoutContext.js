import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultContextValue = {
  menuOpen: false,
  toggleMenu: () => {},
};

export const SubLayoutContext = React.createContext(defaultContextValue);

export const SubLayoutProvider = props => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <SubLayoutContext.Provider
      value={{
        menuOpen,
        toggleMenu: res => toggleMenu(res),
      }}>
      {props.children}
    </SubLayoutContext.Provider>
  );
};

SubLayoutProvider.propTypes = {
  children: PropTypes.node,
};
